import Link from 'next/link';
import styled from 'styled-components';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbContainer>
      <nav aria-label="breadcrumb">
        <BreadcrumbList>
          {items.map((item, index) => (
            <BreadcrumbItem key={item.href}>
              {index < items.length - 1 ? (
                <>
                  <Link href={item.href}>
                    <BreadcrumbLink>{item.label}</BreadcrumbLink>
                  </Link>
                  <Separator>/</Separator>
                </>
              ) : (
                <CurrentPage>{item.label}</CurrentPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </nav>
    </BreadcrumbContainer>
  );
};

const BreadcrumbContainer = styled.div`
  padding: 20px 72px;
  background-color: #f5f5f5;

  @media (max-width: 1440px) {
    padding: 15px 1.5%;
  }
`;

const BreadcrumbList = styled.ol`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BreadcrumbLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CurrentPage = styled.span`
  color: #666;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Separator = styled.span`
  color: #999;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

