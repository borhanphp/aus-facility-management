/**
 * Google Places API Integration
 * Fetches real reviews from Google My Business
 */

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

/**
 * Fetch place details including reviews from Google Places API via server-side route
 * This avoids CORS issues by calling our Next.js API route instead of Google directly
 * @returns Place details with reviews
 */
export async function fetchGoogleReviews(): Promise<GooglePlaceDetails | null> {
  try {
    // Call our own API route instead of Google directly (avoids CORS)
    const response = await fetch('/api/google-reviews');
    const result = await response.json();

    if (result.success && result.data) {
      return result.data;
    } else {
      console.warn('Failed to fetch reviews from API:', result.error);
      return null;
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
}

/**
 * Convert Google review to our testimonial format
 */
export function convertGoogleReviewToTestimonial(review: GoogleReview, serviceName: string) {
  return {
    name: review.author_name,
    location: 'Sydney', // Default to Sydney since it's a Sydney business
    service: serviceName,
    rating: review.rating,
    text: review.text,
    image: review.profile_photo_url || '/images/review-1.png', // Fallback to default
    date: new Date(review.time * 1000).toISOString().split('T')[0],
  };
}

/**
 * Get cached reviews (use at build time or with revalidation)
 * For server-side use in getStaticProps or getServerSideProps
 */
export async function getCachedGoogleReviews(placeId: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.warn('Google Places API key not configured');
    return null;
  }

  try {
    const fields = 'name,rating,user_ratings_total,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return data.result;
    } else {
      console.error('Google Places API error:', data.status, data.error_message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
}

