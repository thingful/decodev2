/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

export default {
  translation: {
    back: 'Enrere',
    cancel: 'Cancel·lar',
    confirm: 'Confirmar',
    greeting: 'Aquesta és l\'app DECODE v2',
    home: 'Inici',
    next: 'Següent',
    refreshStats: 'Actualitzar estadístiques del credential issuer',
    refresh: 'Actualitzar',
    total: 'Total',
    refreshDate: 'Actualitzat el {{date, llll}}',
    second: 'Una altra pantalla',
    walkthrough: {
      refresh: 'Es cridarà l\'API del credential issuer',
      next: 'Clicar aquí per anar a una altra pantalla',
      crash: 'Clicar aquí per a provocar un casque',
    },
  },
  carousel: {
    title: 'DECODE',
    txt1: 'el teu gestor de dades personals',
    txt2: 'Les teves dades tenen un valor. És important que les controlis',
    txt3: 'Amb DECODE, tu decideixes quines dades vols compartir i com seran utilitzades',
    txt4: 'Guarda les teves dades amb alta seguretat',
    done: 'Fet',
    skip: 'Saltar',
    next: 'Següent',
  },
  attributes: {
    add: 'Afegir atribut',
    available: 'Atributs disponibles',
    confirmDelete: 'Segur que vols esborrar {{ name }}?',
    my: 'Els meus atributs',
    empty: 'Comencem per afegir algunes dades.\nFes click en el botó per començar.',
    emptyAtlas: 'Ja tens un valor per totes les dades possibles.',
    enterValue: 'Introdueix un valor',
    save: 'Desar',
  },
  applications: {
    activate: 'Activar servei via QR',
    available: 'Aplicacions',
    averageUse: 'Promig',
    cancel: 'Cancel·lar',
    certificateRequestButton: 'Obtenir certificat',
    certificateRequired: 'Per a signar necessites que et sigui lliurat un certificat',
    certificates: 'Certificats',
    day: 'dia',
    empty: 'No hi ha aplicacions disponibles',
    error: "La vostra petició no s'ha pogut processar",
    firstUse: 'Primer ús',
    history: 'Historial d\'ús',
    lastUse: 'Darrer ús',
    manageData: 'Gestionar les meves dades',
    month: 'mes',
    more: '+ informació',
    sharedData: 'Dades compartides',
    times: '1 cop per {{ unit }}',
    times_interval: '(0){Menys d\'un cop per {{ unit }}};(1-inf){{{ count }} cops per {{ unit }}}',
    times_plural: '{{ count }} cops per {{ unit }}',
    usageCount: 'Usos',
    week: 'setmana',
    year: 'any',
  },
  settings: {
    title: 'Preferències',
    review: 'Revisar ajudes',
    reset: 'Esborrar tot',
    warning: 'Ets a punt d\'esborrar tota la memòria de l\'app (dades, certificats,...)\n\n'
    + 'Aquesta passa no té marxa enrere.\n\n'
    + 'Desitges continuar?\n',
  },
  about: {
    title: 'Informació',
    text1: 'L\'app de DECODE forma part d\'un projecte per a retornar la <b>sobirania de dades</b> als ciutadans i ciutadanes',
    text2: 'Amb l\'app de DECODE pots <b>compartir les teves dades</b> amb les <b>aplicacions compatibles</b> mitjançant <b>certificats criptogràfics</b> de darrera generació',
    more: 'Vull més informació!',
  },
  scanner: {
    title: 'Escàner QR',
    error: 'No s\'ha pogut interpretar el codi QR',
  },
};
