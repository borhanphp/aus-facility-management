import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Server-side API route to fetch Google reviews
 * This avoids CORS issues by calling Google API from the server
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('Google API credentials not configured');
    return res.status(500).json({ 
      error: 'API credentials not configured',
      reviews: null 
    });
  }

  try {
    const fields = 'name,rating,user_ratings_total,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      // Cache the response for 24 hours
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
      
      return res.status(200).json({
        success: true,
        data: {
          name: data.result.name,
          rating: data.result.rating,
          user_ratings_total: data.result.user_ratings_total,
          reviews: data.result.reviews || [],
        },
      });
    } else {
      console.error('Google Places API error:', data.status, data.error_message);
      return res.status(400).json({ 
        error: data.error_message || 'Failed to fetch reviews',
        status: data.status,
        reviews: null 
      });
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      reviews: null 
    });
  }
}

