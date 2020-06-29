import React from 'react';
import { FaReact, FaDog, FaShuttleVan } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { GiFamilyHouse } from 'react-icons/gi';
import leadImage from '../../assets/green-sand-beach.jpg';
import PageMenu from '../../components/PageMenu';
import ListItem from '../../components/PageMenu/ListItem';
import Developer from './Developer';

const Home = () => (
  <>
    <PageMenu leadImage={leadImage}>
      <ListItem icon={<FaReact />} text="Seniorish FrontEndish Software Developer" />
      <ListItem icon={<GiFamilyHouse />} text="House Fixer-Upper" />
      <ListItem icon={<GoTools />} text="Maker" />
      <ListItem icon={<FaShuttleVan />} text="Van Camper" />
      <ListItem icon={<FaDog />} text="Dog Mom" />
    </PageMenu>
    <Developer icon={<FaReact />} title="Seniorish FrontEndish Software Developer" />
  </>
);

export default Home;
