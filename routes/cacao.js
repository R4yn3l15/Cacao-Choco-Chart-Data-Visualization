//import express and express router as shown in lecture code and worked in previous labs. Import your data functions from /data/nss.js that you will call in your routes below

import { Router } from 'express';
import { origins, ingredientCombos, batches } from '../data/cacao.js';
import { characteristicRadarData } from '../data/characteristicRadarData.js';
const router = Router();


router.route('/').get(async (req, res) => {
  //code here for GET will render the home handlebars file
  return res.render('home', {title: 'Cacao Chart'});
});

router.get('/data', (req, res) => {
  res.render('data', {
    title: 'Data',
    origins,
    batches,
    ingredientCombos,
    characteristicRadarData
  });
});

router.get('/history', (req, res) => {
  res.render('history', { title: 'History' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

export default router;
