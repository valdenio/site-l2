import React from 'react';
import Marquee from 'react-fast-marquee';
import i18next from 'i18next';
import { PeopleMosaicSection } from './styled';
import { Typography } from '../../../styles/typography';
import PeopleCard from '../../atoms/PeopleCard';
import PeopleCardList from '../../molecules/PeopleCardList';

export default function PeopleMosaic() {
    const array = [
        {
            title: "developers",
            people: [
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Bruno",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Claus",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Felipe",
                    city: "Rio Grande do Sul"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Guilherme",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Letícia",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Richard",
                    city: "Rio Grande do Sul"
                },
            ]
        },
        {
            title: "uxui",
            people: [
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Bruno",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Claus",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Felipe",
                    city: "Rio Grande do Sul"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Guilherme",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Letícia",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Richard",
                    city: "Rio Grande do Sul"
                },
            ]
        },
        {
            title: "humanResources",
            people: [
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Bruno",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Claus",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Felipe",
                    city: "Rio Grande do Sul"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Guilherme",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Letícia",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Richard",
                    city: "Rio Grande do Sul"
                },
            ]
        },
        {
            title: "managers",
            people: [
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Bruno",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Claus",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Felipe",
                    city: "Rio Grande do Sul"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Guilherme",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Letícia",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Richard",
                    city: "Rio Grande do Sul"
                },
            ]
        },
        {
            title: "projectManagement",
            people: [
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Bruno",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Claus",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Felipe",
                    city: "Rio Grande do Sul"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Guilherme",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Letícia",
                    city: "São Paulo"
                },
                {
                    images: ["BrunoPhoto.png", "ClausPhoto.png", "FelipePhoto.png"],
                    name: "Richard",
                    city: "Rio Grande do Sul"
                },
            ]
        }
        
    ]
  const { t } = i18next;
  return (
    <PeopleMosaicSection>
        {array.map((item, key)=> {
            return <PeopleCardList title={item.title} people={item.people} key={key} index={key} arrayLength={array.length}/>

        })}
        
    </PeopleMosaicSection>
  );
}