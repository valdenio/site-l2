import { useEffect, useState } from 'react';
import { transform } from 'framer-motion';
import {
  ServiceBlock,
  ServicePeopleData,
  ServicePeopleBlock,
  ServicePeopleImage,
  ServiceTitle,
  ServiceType,
  ServicePeoplePill,
  ServiceTechnologiesBlock,
  ServiceTechnologiesTitle,
  ServiceTechnologiesImage,
  ServiceDescription,
  ServiceTechnologiesImageWrapper,
  SeeMoreButton,
} from './styled';

export interface ServiceComponentProps {
  title: string;
  type: string;
  imageSrc: string;
  peopleQuantity: string;
  technologies: string[];
  technologiesTitle: string;
  description: string;
}

const ServiceComponent = (props: ServiceComponentProps) => {
  const [seeMore, setSeeMore] = useState(true);
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920,
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ServiceBlock>
      <ServiceTitle> {props.title} </ServiceTitle>
      <ServiceType> {props.type} </ServiceType>
      <ServicePeopleBlock>
        <ServicePeopleImage
          src={`/images/AssignmentsLP/${props.imageSrc}.svg`}
        />
        <ServicePeopleData>
          <ServicePeoplePill>
            <img alt="user-icon" src="/images/AssignmentsLP/user.svg" />
            {props.peopleQuantity}{' '}
          </ServicePeoplePill>
          <ServiceTechnologiesBlock>
            <ServiceTechnologiesTitle>
              {props.technologiesTitle}
            </ServiceTechnologiesTitle>
            <ServiceTechnologiesImageWrapper>
              {props.technologies.map((tech) => {
                return (
                  <ServiceTechnologiesImage
                    src={`/assets/icons/technologies/${tech}.svg`}
                  />
                );
              })}
            </ServiceTechnologiesImageWrapper>
          </ServiceTechnologiesBlock>
        </ServicePeopleData>
      </ServicePeopleBlock>
      <ServiceDescription seeMore={seeMore}>
        {props.description}
      </ServiceDescription>
      {width <= 700 && (
        <SeeMoreButton onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? (
            <>
              <img alt="vectordown" src="/images/AssignmentsLP/vector.svg" />
              Ver mais
            </>
          ) : (
            <>
              <img
                style={{ transform: 'rotate(180deg)' }}
                alt="vectordown"
                src="/images/AssignmentsLP/vector.svg"
              />
              Ver menos
            </>
          )}
        </SeeMoreButton>
      )}
    </ServiceBlock>
  );
};

export default ServiceComponent;
