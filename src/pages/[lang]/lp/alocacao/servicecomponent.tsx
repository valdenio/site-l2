import { useEffect, useState } from 'react';
import {
  ServiceBlock,
  ServicePeopleData,
  ServicePeopleBlock,
  ServicePeopleImage,
  ServiceTitle,
  ServiceType,
  // ServicePeoplePill,
  ServiceTechnologiesBlock,
  ServiceTechnologiesTitle,
  ServiceTechnologiesImage,
  ServiceDescription,
  ServiceTechnologiesImageWrapper,
  SeeMoreButton,
} from '../../../../styles/alocacao-lp-styled';

export interface ServiceComponentProps {
  title: string;
  type: string;
  imageSrc: string;
  // peopleQuantity: string;
  technologies: string[];
  technologiesTitle: string;
  description: string;
}

const ServiceComponent = (props: ServiceComponentProps) => {
  const [seeMore, setSeeMore] = useState(true);

  return (
    <ServiceBlock>
      <ServiceTitle> {props.title} </ServiceTitle>
      <ServiceType> {props.type} </ServiceType>
      <ServicePeopleBlock>
        <ServicePeopleImage
          src={`/images/AssignmentsLP/${props.imageSrc}.svg`}
        />
        <ServicePeopleData>
          {/* Removido por decisão do Leroi - Comentando o código pra caso volte
          <ServicePeoplePill>
            <img alt="user-icon" src="/images/AssignmentsLP/user.svg" />
            {props.peopleQuantity}{' '}
          </ServicePeoplePill> */}
          <ServiceTechnologiesBlock>
            <ServiceTechnologiesTitle>
              {props.technologiesTitle}
            </ServiceTechnologiesTitle>
            <ServiceTechnologiesImageWrapper>
              {props.technologies?.map((tech) => {
                return (
                  <ServiceTechnologiesImage
                    key={`tech${props.title}${tech}`}
                    alt={`tech${props.title}${tech}`}
                    src={`/images/AssignmentsLP/tech-icons/${tech}.png`}
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
    </ServiceBlock>
  );
};

export default ServiceComponent;
