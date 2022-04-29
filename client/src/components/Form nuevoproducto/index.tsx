import * as React from 'react';
import CampoSimple from './CampoSimple'
import CampoPrecio from './CampoPrecio'
import CampoCategoria from './CampoCategoria'
import './index.css'

export default function FormP() {
  return (
      <div id='formnuevop'>
          <div id='gridnuevop'>
            <CampoSimple nombre='Nombre'/>
            <CampoPrecio/>
            <CampoCategoria/>
          </div>
      </div>
  );
}
