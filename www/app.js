(function(){
'use strict';
var KEY='uchet-chasov-v1';

/* ---------- языки и валюты ---------- */
var LANGS=[['ru','Русский'],['en','English'],['it','Italiano'],['uk','Українська']];
var LOCALE={ru:'ru-RU',en:'en-GB',it:'it-IT',uk:'uk-UA'};
var CURS=['EUR','USD','GBP','CHF','PLN','CZK','UAH','RUB','TRY','CAD','AUD','JPY'];
var REGION_CUR={US:'USD',GB:'GBP',CH:'CHF',PL:'PLN',CZ:'CZK',UA:'UAH',RU:'RUB',TR:'TRY',CA:'CAD',AU:'AUD',JP:'JPY'};

var D={
ru:{
  appTitle:'WorkTime',uh:'ч',um:'м',
  pw:{one:'рабочий день',few:'рабочих дня',many:'рабочих дней',other:'рабочих дня'},
  prev:'Назад',next:'Вперёд',period:'Период',settings:'Настройки',week:'Неделя',month:'Месяц',today:'Сегодня',
  weekN:'Неделя {n}',wk:'нед',
  sampleBanner:'Показаны примеры. Нажмите на день, чтобы изменить.',clearSample:'Начать с нуля',
  noStorage:'Хранилище недоступно: данные останутся только до закрытия страницы.',
  sumAria:'Итоги периода',worked:'Отработано',ofNorm:'из {x} по норме',noNorm:'норма не задана',
  days:'Дней',avg:'В среднем',over:'Сверх нормы',left:'До нормы',norm:'Норма',earned:'Заработано',
  calAria:'Календарь месяца',noEntry:'нет записи',byWeek:'По неделям',weeksAria:'Итоги по неделям',normShort:'норма {x}',
  weekAria:'Дни недели',todayTag:'Сегодня',noEntryCap:'Нет записи',dayOff:'Выходной',
  hint:'Нажмите на день, чтобы ввести часы.',
  cancel:'Отмена',done:'Готово',inputMode:'Способ ввода',modeDur:'Длительность',modeSpan:'Начало и конец',
  start:'Начало',end:'Конец',brk:'Перерыв, минут',notePh:'Заметка (необязательно)',
  save:'Сохранить',saveNext:'Сохранить и открыть следующий день',delEntry:'Удалить запись',
  exact:'Ровно по норме',overBy:'Сверх нормы на {x}',underBy:'До нормы {x}',
  saved:'Сохранено',deleted:'Запись удалена',cleared:'Данные удалены',copied:'Отчёт скопирован',selectCopy:'Выделите текст и скопируйте',
  normPerDay:'Норма в день, часов',rate:'Ставка в час, {c}',rateNone:'не задана',workDays:'Рабочие дни',
  copyReport:'Скопировать отчёт: {p}',periodMonth:'месяц',periodWeek:'неделя',repAria:'Текст отчёта',
  clearAll:'Очистить все данные',clearSure:'Нажмите ещё раз, чтобы удалить всё',footer:'Данные хранятся на этом устройстве.',
  language:'Язык',currency:'Валюта',auto:'Как в системе',curNote:'Смена валюты не пересчитывает ставку.',
  reportTitle:'WorkTime',reportTotal:'Итого: {x}, дней: {n}',reportNorm:'Норма: {x}',reportEarned:'Заработано: {x}',
  sample1:'Выезд к клиенту',sample2:'Инвентаризация',
  backup:'Резервная копия',backupSave:'Сохранить копию',backupRestore:'Восстановить из файла',
  backupNote:'Файл копии можно сохранить в Google Drive: выберите Drive в меню «Поделиться». Чтобы вернуть данные, выберите этот файл.',
  backupShareTitle:'Резервная копия WorkTime',backupSaved:'Файл сохранён',backupFail:'Не удалось сохранить копию',
  restoreBad:'Это не файл копии приложения',restoreAsk:'Найдено записей: {n}. Заменить текущие данные?',restoreYes:'Заменить',restoreNo:'Отмена',restoreDone:'Данные восстановлены'
},
en:{
  appTitle:'WorkTime',uh:'h',um:'m',
  pw:{one:'working day',other:'working days'},
  prev:'Back',next:'Forward',period:'Period',settings:'Settings',week:'Week',month:'Month',today:'Today',
  weekN:'Week {n}',wk:'wk',
  sampleBanner:'Sample data shown. Tap a day to edit.',clearSample:'Start fresh',
  noStorage:'Storage is unavailable. Data is kept only until you close the page.',
  sumAria:'Period summary',worked:'Worked',ofNorm:'of {x} target',noNorm:'no target set',
  days:'Days',avg:'Average',over:'Over target',left:'To target',norm:'Target',earned:'Earned',
  calAria:'Month calendar',noEntry:'no entry',byWeek:'By week',weeksAria:'Weekly totals',normShort:'target {x}',
  weekAria:'Days of the week',todayTag:'Today',noEntryCap:'No entry',dayOff:'Day off',
  hint:'Tap a day to enter hours.',
  cancel:'Cancel',done:'Done',inputMode:'Input method',modeDur:'Duration',modeSpan:'Start and end',
  start:'Start',end:'End',brk:'Break, minutes',notePh:'Note (optional)',
  save:'Save',saveNext:'Save and open next day',delEntry:'Delete entry',
  exact:'Exactly on target',overBy:'{x} over target',underBy:'{x} to target',
  saved:'Saved',deleted:'Entry deleted',cleared:'Data deleted',copied:'Report copied',selectCopy:'Select the text and copy it',
  normPerDay:'Daily target, hours',rate:'Hourly rate, {c}',rateNone:'not set',workDays:'Working days',
  copyReport:'Copy report: {p}',periodMonth:'month',periodWeek:'week',repAria:'Report text',
  clearAll:'Delete all data',clearSure:'Tap again to delete everything',footer:'Data is stored on this device.',
  language:'Language',currency:'Currency',auto:'System default',curNote:'Changing the currency does not convert the rate.',
  reportTitle:'WorkTime',reportTotal:'Total: {x}, days: {n}',reportNorm:'Target: {x}',reportEarned:'Earned: {x}',
  sample1:'Client visit',sample2:'Stocktaking',
  backup:'Backup',backupSave:'Save backup',backupRestore:'Restore from file',
  backupNote:'You can save the backup file to Google Drive: pick Drive in the Share menu. To get your data back, choose that file.',
  backupShareTitle:'WorkTime backup',backupSaved:'File saved',backupFail:'Could not save the backup',
  restoreBad:'This is not a backup file from this app',restoreAsk:'{n} entries found. Replace the current data?',restoreYes:'Replace',restoreNo:'Cancel',restoreDone:'Data restored'
},
it:{
  appTitle:'WorkTime',uh:'h',um:'min',
  pw:{one:'giorno lavorativo',many:'giorni lavorativi',other:'giorni lavorativi'},
  prev:'Indietro',next:'Avanti',period:'Periodo',settings:'Impostazioni',week:'Settimana',month:'Mese',today:'Oggi',
  weekN:'Settimana {n}',wk:'sett.',
  sampleBanner:'Dati di esempio. Tocca un giorno per modificare.',clearSample:'Ricomincia da zero',
  noStorage:'Archivio non disponibile: i dati restano solo finché la pagina è aperta.',
  sumAria:'Riepilogo del periodo',worked:'Lavorate',ofNorm:'su {x} previste',noNorm:'obiettivo non impostato',
  days:'Giorni',avg:'Media',over:'Oltre l’obiettivo',left:'All’obiettivo',norm:'Obiettivo',earned:'Guadagno',
  calAria:'Calendario del mese',noEntry:'nessuna voce',byWeek:'Per settimana',weeksAria:'Totali settimanali',normShort:'obiettivo {x}',
  weekAria:'Giorni della settimana',todayTag:'Oggi',noEntryCap:'Nessuna voce',dayOff:'Giorno libero',
  hint:'Tocca un giorno per inserire le ore.',
  cancel:'Annulla',done:'Fine',inputMode:'Modalità di inserimento',modeDur:'Durata',modeSpan:'Inizio e fine',
  start:'Inizio',end:'Fine',brk:'Pausa, minuti',notePh:'Nota (facoltativa)',
  save:'Salva',saveNext:'Salva e apri il giorno successivo',delEntry:'Elimina voce',
  exact:'Esattamente come previsto',overBy:'{x} oltre l’obiettivo',underBy:'{x} all’obiettivo',
  saved:'Salvato',deleted:'Voce eliminata',cleared:'Dati eliminati',copied:'Report copiato',selectCopy:'Seleziona il testo e copialo',
  normPerDay:'Obiettivo giornaliero, ore',rate:'Tariffa oraria, {c}',rateNone:'non impostata',workDays:'Giorni lavorativi',
  copyReport:'Copia report: {p}',periodMonth:'mese',periodWeek:'settimana',repAria:'Testo del report',
  clearAll:'Elimina tutti i dati',clearSure:'Tocca ancora per eliminare tutto',footer:'I dati sono salvati su questo dispositivo.',
  language:'Lingua',currency:'Valuta',auto:'Come il sistema',curNote:'Cambiando valuta la tariffa non viene convertita.',
  reportTitle:'WorkTime',reportTotal:'Totale: {x}, giorni: {n}',reportNorm:'Obiettivo: {x}',reportEarned:'Guadagno: {x}',
  sample1:'Visita dal cliente',sample2:'Inventario',
  backup:'Copia di sicurezza',backupSave:'Salva copia',backupRestore:'Ripristina da file',
  backupNote:'Puoi salvare il file in Google Drive: scegli Drive nel menu Condividi. Per recuperare i dati, scegli quel file.',
  backupShareTitle:'Copia di WorkTime',backupSaved:'File salvato',backupFail:'Impossibile salvare la copia',
  restoreBad:'Questo non è un file di copia di questa app',restoreAsk:'Trovate {n} voci. Sostituire i dati attuali?',restoreYes:'Sostituisci',restoreNo:'Annulla',restoreDone:'Dati ripristinati'
},
uk:{
  appTitle:'WorkTime',uh:'год',um:'хв',
  pw:{one:'робочий день',few:'робочі дні',many:'робочих днів',other:'робочого дня'},
  prev:'Назад',next:'Вперед',period:'Період',settings:'Налаштування',week:'Тиждень',month:'Місяць',today:'Сьогодні',
  weekN:'Тиждень {n}',wk:'тиж',
  sampleBanner:'Показано приклади. Натисніть на день, щоб змінити.',clearSample:'Почати з нуля',
  noStorage:'Сховище недоступне: дані збережуться лише до закриття сторінки.',
  sumAria:'Підсумки періоду',worked:'Відпрацьовано',ofNorm:'із {x} за нормою',noNorm:'норму не задано',
  days:'Днів',avg:'У середньому',over:'Понад норму',left:'До норми',norm:'Норма',earned:'Зароблено',
  calAria:'Календар місяця',noEntry:'немає запису',byWeek:'По тижнях',weeksAria:'Підсумки по тижнях',normShort:'норма {x}',
  weekAria:'Дні тижня',todayTag:'Сьогодні',noEntryCap:'Немає запису',dayOff:'Вихідний',
  hint:'Натисніть на день, щоб ввести години.',
  cancel:'Скасувати',done:'Готово',inputMode:'Спосіб введення',modeDur:'Тривалість',modeSpan:'Початок і кінець',
  start:'Початок',end:'Кінець',brk:'Перерва, хвилин',notePh:'Нотатка (необов’язково)',
  save:'Зберегти',saveNext:'Зберегти й відкрити наступний день',delEntry:'Видалити запис',
  exact:'Рівно за нормою',overBy:'Понад норму на {x}',underBy:'До норми {x}',
  saved:'Збережено',deleted:'Запис видалено',cleared:'Дані видалено',copied:'Звіт скопійовано',selectCopy:'Виділіть текст і скопіюйте',
  normPerDay:'Норма на день, годин',rate:'Ставка за годину, {c}',rateNone:'не задано',workDays:'Робочі дні',
  copyReport:'Скопіювати звіт: {p}',periodMonth:'місяць',periodWeek:'тиждень',repAria:'Текст звіту',
  clearAll:'Видалити всі дані',clearSure:'Натисніть ще раз, щоб видалити все',footer:'Дані зберігаються на цьому пристрої.',
  language:'Мова',currency:'Валюта',auto:'Як у системі',curNote:'Зміна валюти не перераховує ставку.',
  reportTitle:'WorkTime',reportTotal:'Разом: {x}, днів: {n}',reportNorm:'Норма: {x}',reportEarned:'Зароблено: {x}',
  sample1:'Виїзд до клієнта',sample2:'Інвентаризація',
  backup:'Резервна копія',backupSave:'Зберегти копію',backupRestore:'Відновити з файлу',
  backupNote:'Файл копії можна зберегти на Google Drive: виберіть Drive в меню «Поділитися». Щоб повернути дані, виберіть цей файл.',
  backupShareTitle:'Резервна копія WorkTime',backupSaved:'Файл збережено',backupFail:'Не вдалося зберегти копію',
  restoreBad:'Це не файл копії цього застосунку',restoreAsk:'Знайдено записів: {n}. Замінити поточні дані?',restoreYes:'Замінити',restoreNo:'Скасувати',restoreDone:'Дані відновлено'
}
};

var store={entries:{},settings:{norm:480,rate:0,days:[1,2,3,4,5],lang:'auto',cur:'auto'},sample:false};
var persist=true;
var state={view:'month',cursor:today()};
var ed=null, sheetKind=null, closeTimer=null, toastTimer=null;
var L='en', loc='en-GB', cur='EUR';

var $=function(id){return document.getElementById(id)};
var main=$('main'), sheet=$('sheet'), scrim=$('scrim'), toastEl=$('toast');

/* ---------- язык ---------- */
function resolveLang(){
  var s=store.settings.lang;
  if(s&&s!=='auto'&&D[s])return s;
  var list=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language||'en'];
  for(var i=0;i<list.length;i++){var c=String(list[i]).toLowerCase().split('-')[0];if(D[c])return c}
  return 'en';
}
function resolveCur(){
  var s=store.settings.cur;
  if(s&&s!=='auto'&&CURS.indexOf(s)>-1)return s;
  var parts=String(navigator.language||'').split('-');
  return REGION_CUR[(parts[1]||'').toUpperCase()]||'EUR';
}
function t(k,v){
  var s=(D[L]&&D[L][k]!=null)?D[L][k]:(D.en[k]!=null?D.en[k]:k);
  if(v)for(var n in v)s=s.split('{'+n+'}').join(v[n]);
  return s;
}
function applyLocale(){
  L=resolveLang();loc=LOCALE[L];cur=resolveCur();
  document.documentElement.lang=L;
  document.title=t('appTitle');
  var q=function(sel){return document.querySelector(sel)};
  q('[data-a="prev"]').setAttribute('aria-label',t('prev'));
  q('[data-a="next"]').setAttribute('aria-label',t('next'));
  q('[data-a="settings"]').setAttribute('aria-label',t('settings'));
  q('.seg').setAttribute('aria-label',t('period'));
  $('vWeek').textContent=t('week');
  $('vMonth').textContent=t('month');
}

/* ---------- форматирование ---------- */
var dtfCache={};
function dtf(o){var k=loc+JSON.stringify(o);return dtfCache[k]||(dtfCache[k]=new Intl.DateTimeFormat(loc,o))}
function pad(n){return String(n).padStart(2,'0')}
function today(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate())}
function key(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
function parseKey(k){var p=k.split('-').map(Number);return new Date(p[0],p[1]-1,p[2])}
function addDays(d,n){return new Date(d.getFullYear(),d.getMonth(),d.getDate()+n)}
function mondayOf(d){return addDays(d,-((d.getDay()+6)%7))}
function same(a,b){return key(a)===key(b)}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function monthName(d){return cap(dtf({month:'long'}).format(d))}
function dayMonth(d){return dtf({day:'numeric',month:'long'}).format(d)}
function monthShort(d){return dtf({month:'short'}).format(d).replace(/\.$/,'')}
function wdShort(d){return cap(dtf({weekday:'short'}).format(d).replace(/\.$/,''))}
function wdLong(d){return cap(dtf({weekday:'long'}).format(d))}
function pluralWord(n){
  var c='other';try{c=new Intl.PluralRules(loc).select(n)}catch(e){}
  var f=D[L].pw;return f[c]||f.other;
}
function fmtHM(m){return Math.floor(m/60)+':'+pad(m%60)}
function fmtLong(m){
  var h=Math.floor(m/60),mm=m%60,uh=t('uh'),um=t('um');
  if(!h&&!mm)return '0 '+uh;
  return (h?h+' '+uh:'')+(h&&mm?' ':'')+(mm?mm+' '+um:'');
}
function money(x){
  try{return new Intl.NumberFormat(loc,{style:'currency',currency:cur}).format(x)}
  catch(e){return (Math.round(x*100)/100)+' '+cur}
}
function curSymbol(){
  try{
    var p=new Intl.NumberFormat(loc,{style:'currency',currency:cur,currencyDisplay:'narrowSymbol'}).formatToParts(0);
    for(var i=0;i<p.length;i++)if(p[i].type==='currency')return p[i].value;
  }catch(e){}
  return cur;
}
function curName(code){
  try{var n=new Intl.DisplayNames([loc],{type:'currency'}).of(code);return n?cap(n):code}catch(e){return code}
}
function isoWeek(d){var x=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));var day=x.getUTCDay()||7;x.setUTCDate(x.getUTCDate()+4-day);var y0=new Date(Date.UTC(x.getUTCFullYear(),0,1));return Math.ceil(((x-y0)/864e5+1)/7)}
function isWork(d){return store.settings.days.indexOf(d.getDay())>-1}
function workDays(a,b){var c=0;for(var d=a;d<=b;d=addDays(d,1))if(isWork(d))c++;return c}
function stats(a,b){var total=0,days=0;for(var d=a;d<=b;d=addDays(d,1)){var e=store.entries[key(d)];if(e&&e.min>0){total+=e.min;days++}}return{total:total,days:days,goal:workDays(a,b)*store.settings.norm}}
function noteOf(e){return e?(e.note||(e.sk?t('sample'+e.sk):'')):''}

/* ---------- хранилище ---------- */
function seed(){
  store.entries={};store.sample=true;
  var pattern=[480,495,450,510,480,465,540,420,480,495,450,525];
  var now=today(),i=0;
  for(var n=1;n<=24;n++){
    var d=addDays(now,-n),wd=d.getDay();
    if(wd===0||wd===6)continue;
    i++;
    if(i===7)continue;
    var e={min:pattern[i%pattern.length]};
    if(i===3)e.sk=1;
    if(i===9)e.sk=2;
    store.entries[key(d)]=e;
  }
}
function load(){
  var raw=null;
  try{localStorage.setItem('__t','1');localStorage.removeItem('__t');raw=localStorage.getItem(KEY)}catch(e){persist=false}
  if(raw){
    try{
      var o=JSON.parse(raw),s=o.settings||{};
      store.entries=o.entries||{};store.sample=!!o.sample;
      store.settings={
        norm:isFinite(s.norm)?s.norm:480,
        rate:isFinite(s.rate)?s.rate:0,
        days:Array.isArray(s.days)?s.days:[1,2,3,4,5],
        lang:s.lang||'auto',
        cur:s.cur||'auto'
      };
      return;
    }catch(e){}
  }
  seed();save();
}
function save(){if(!persist)return;try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}

/* ---------- период ---------- */
function period(){
  var c=state.cursor,from,to,title,sub;
  if(state.view==='month'){
    from=new Date(c.getFullYear(),c.getMonth(),1);to=new Date(c.getFullYear(),c.getMonth()+1,0);
    var n=workDays(from,to);
    title=monthName(c);
    sub=c.getFullYear()+' · '+n+' '+pluralWord(n);
  }else{
    from=mondayOf(c);to=addDays(from,6);
    title=from.getMonth()===to.getMonth()
      ?from.getDate()+' – '+to.getDate()+' '+monthShort(to)
      :from.getDate()+' '+monthShort(from)+' – '+to.getDate()+' '+monthShort(to);
    sub=t('weekN',{n:isoWeek(from)})+' · '+addDays(from,3).getFullYear();
  }
  var now=today();
  return{from:from,to:to,title:title,sub:sub,hasToday:now>=from&&now<=to};
}

/* ---------- отрисовка ---------- */
function ringSVG(pct,full){
  var C=2*Math.PI*36,off=C*(1-Math.min(pct,1));
  return '<svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true"><circle cx="44" cy="44" r="36" fill="none" stroke="var(--fill)" stroke-width="10"/>'+
    (pct>0?'<circle cx="44" cy="44" r="36" fill="none" stroke="'+(full?'var(--green)':'var(--accent)')+'" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+C.toFixed(2)+'" stroke-dashoffset="'+off.toFixed(2)+'" transform="rotate(-90 44 44)"/>':'')+'</svg>';
}
function stat(l,v){return '<div class="stat"><div class="l">'+esc(l)+'</div><div class="v">'+esc(v)+'</div></div>'}
function summaryHTML(st){
  var pct=st.goal>0?st.total/st.goal:0,full=st.goal>0&&st.total>=st.goal;
  var avg=st.days?Math.round(st.total/st.days):0;
  var d1=st.goal>0?(st.total>=st.goal?[t('over'),'+'+fmtLong(st.total-st.goal)]:[t('left'),fmtLong(st.goal-st.total)]):[t('norm'),'—'];
  var r=store.settings.rate;
  return '<section class="card sum" aria-label="'+esc(t('sumAria'))+'"><div class="top"><div class="ring">'+ringSVG(pct,full)+
    '<span class="pct">'+(st.goal>0?Math.round(pct*100)+'%':'—')+'</span></div>'+
    '<div class="tot"><div class="cap">'+esc(t('worked'))+'</div><div class="big">'+esc(fmtLong(st.total))+'</div><div class="of">'+esc(st.goal>0?t('ofNorm',{x:fmtLong(st.goal)}):t('noNorm'))+'</div></div></div>'+
    '<div class="stats">'+stat(t('days'),st.days)+stat(t('avg'),st.days?fmtLong(avg):'—')+stat(d1[0],d1[1])+(r>0?stat(t('earned'),money(st.total/60*r)):'')+'</div></section>';
}
function heat(e){
  var n=store.settings.norm||480,r=Math.min(e.min/n,1);
  return{h:Math.round(14+r*34),full:store.settings.norm>0&&e.min>=store.settings.norm};
}
function monthHTML(per){
  var c=state.cursor,now=today(),start=mondayOf(per.from),end=addDays(mondayOf(per.to),6),ref=new Date(2024,0,1),i;
  var h='<section class="card cal" aria-label="'+esc(t('calAria'))+'"><div class="dow">';
  for(i=0;i<7;i++)h+='<span>'+esc(wdShort(addDays(ref,i)))+'</span>';
  h+='</div><div class="grid">';
  for(var d=start;d<=end;d=addDays(d,1)){
    var k=key(d),e=store.entries[k],has=e&&e.min>0;
    var cls='cell'+(d.getMonth()===c.getMonth()?'':' out')+(same(d,now)?' today':'')+(isWork(d)?'':' off'),st='';
    if(has){var hh=heat(e);cls+=' has'+(hh.full?' full':'');st=' style="--h:'+hh.h+'%"'}
    h+='<button class="'+cls+'"'+st+' data-day="'+k+'" aria-label="'+esc(wdLong(d)+', '+dayMonth(d)+', '+(has?fmtLong(e.min):t('noEntry')))+'">'+
      '<span class="n">'+d.getDate()+'</span>'+(has?'<span class="h">'+fmtHM(e.min)+'</span>':'')+'</button>';
  }
  h+='</div></section>';
  var rows='';
  for(var s=mondayOf(per.from);s<=per.to;s=addDays(s,7)){
    var e2=addDays(s,6),a=s<per.from?per.from:s,b=e2>per.to?per.to:e2,w=stats(a,b);
    var pct=w.goal>0?Math.min(w.total/w.goal*100,100):(w.total>0?100:0);
    var rng=same(a,b)?a.getDate()+' '+monthShort(a):a.getMonth()===b.getMonth()?a.getDate()+' – '+b.getDate()+' '+monthShort(b):a.getDate()+' '+monthShort(a)+' – '+b.getDate()+' '+monthShort(b);
    rows+='<button class="row" data-week="'+key(s)+'"><span class="dayb"><small>'+esc(t('wk'))+'</small><b>'+isoWeek(s)+'</b></span>'+
      '<span class="mid"><span class="track"><span class="fill'+(w.goal>0&&w.total>=w.goal?' full':'')+'" style="width:'+pct.toFixed(1)+'%"></span></span><span class="note">'+esc(rng+(w.goal>0?' · '+t('normShort',{x:fmtLong(w.goal)}):''))+'</span></span>'+
      '<span class="val">'+(w.total>0?esc(fmtLong(w.total)):'—')+'</span></button>';
  }
  return h+'<div class="sec">'+esc(t('byWeek'))+'</div><section class="card rows" aria-label="'+esc(t('weeksAria'))+'">'+rows+'</section>';
}
function weekHTML(per){
  var now=today(),max=60,i,d;
  for(i=0;i<7;i++){var e0=store.entries[key(addDays(per.from,i))];if(e0&&e0.min>max)max=e0.min}
  var scale=Math.max(store.settings.norm*1.25,max);
  var rows='';
  for(i=0;i<7;i++){
    d=addDays(per.from,i);
    var k=key(d),e=store.entries[k],min=e?e.min:0,isT=same(d,now),parts=[];
    if(isT)parts.push(t('todayTag'));
    if(min<=0)parts.push(isWork(d)?t('noEntryCap'):t('dayOff'));
    if(noteOf(e))parts.push(noteOf(e));
    var full=store.settings.norm>0&&min>=store.settings.norm;
    rows+='<button class="row'+(isT?' today':'')+'" data-day="'+k+'"><span class="dayb"><small>'+esc(wdShort(d))+'</small><b>'+d.getDate()+'</b></span>'+
      '<span class="mid"><span class="track"><span class="fill'+(full?' full':'')+'" style="width:'+(min/scale*100).toFixed(1)+'%"></span></span><span class="note">'+esc(parts.join(' · '))+'</span></span>'+
      '<span class="val">'+(min>0?esc(fmtLong(min)):'—')+'</span></button>';
  }
  return '<section class="card rows" aria-label="'+esc(t('weekAria'))+'">'+rows+'</section>';
}
function render(){
  var per=period(),st=stats(per.from,per.to),h='';
  $('vWeek').setAttribute('aria-pressed',state.view==='week');
  $('vMonth').setAttribute('aria-pressed',state.view==='month');
  h+='<div class="titlerow"><div><h1>'+esc(per.title)+'</h1><div class="sub">'+esc(per.sub)+'</div></div>'+(per.hasToday?'':'<button class="pill" data-a="today">'+esc(t('today'))+'</button>')+'</div>';
  if(store.sample)h+='<div class="banner"><span>'+esc(t('sampleBanner'))+'</span><button data-a="clearsample">'+esc(t('clearSample'))+'</button></div>';
  if(!persist)h+='<div class="banner"><span>'+esc(t('noStorage'))+'</span></div>';
  h+=summaryHTML(st);
  h+=state.view==='month'?monthHTML(per):weekHTML(per);
  h+='<p class="hint">'+esc(t('hint'))+'</p>';
  main.innerHTML=h;
}
function shift(dir){
  var c=state.cursor;
  state.cursor=state.view==='month'?new Date(c.getFullYear(),c.getMonth()+dir,1):addDays(c,7*dir);
  render();
}

/* ---------- окно ---------- */
function openSheet(html,kind){
  sheet.innerHTML=html;
  if(!sheetKind){
    clearTimeout(closeTimer);
    sheet.hidden=false;scrim.hidden=false;document.body.style.overflow='hidden';
    void sheet.offsetWidth;
    sheet.classList.add('open');scrim.classList.add('open');
  }
  sheetKind=kind;sheet.scrollTop=0;
  try{sheet.focus({preventScroll:true})}catch(e){}
}
function closeSheet(){
  if(!sheetKind)return;
  sheet.classList.remove('open');scrim.classList.remove('open');
  sheetKind=null;ed=null;document.body.style.overflow='';
  closeTimer=setTimeout(function(){sheet.hidden=true;scrim.hidden=true;sheet.innerHTML=''},340);
}
function toast(msg){
  toastEl.textContent=msg;toastEl.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(function(){toastEl.classList.remove('show')},1800);
}

/* ---------- ввод за день ---------- */
function spanMin(){
  if(!ed.start||!ed.end)return 0;
  var s=ed.start.split(':').map(Number),e=ed.end.split(':').map(Number);
  var d=(e[0]*60+e[1])-(s[0]*60+s[1]);if(d<0)d+=1440;
  return Math.max(0,d-ed.brk);
}
function curMin(){return ed.mode==='span'?spanMin():ed.min}
function editorHTML(){
  var d=parseKey(ed.key),exists=!!store.entries[ed.key],uh=t('uh'),um=t('um');
  var title=wdLong(d)+', '+dayMonth(d);
  var steps=[[-60,'−1 '+uh],[-15,'−15 '+um],[15,'+15 '+um],[60,'+1 '+uh]];
  return '<div class="sheet-in"><div class="grab"></div>'+
  '<div class="shead"><button class="txt" data-a="close">'+esc(t('cancel'))+'</button><h2 id="sheetTitle">'+esc(title)+'</h2><button class="txt strong" data-a="save">'+esc(t('done'))+'</button></div>'+
  '<div class="edtotal" id="edTotal"></div><div class="edsub" id="edSub"></div>'+
  '<div class="seg wide" role="group" aria-label="'+esc(t('inputMode'))+'"><button data-mode="dur" id="mDur" aria-pressed="true">'+esc(t('modeDur'))+'</button><button data-mode="span" id="mSpan" aria-pressed="false">'+esc(t('modeSpan'))+'</button></div>'+
  '<div id="pDur"><div class="steps">'+steps.map(function(s){return '<button data-step="'+s[0]+'">'+esc(s[1])+'</button>'}).join('')+'</div>'+
  '<div class="chips">'+[2,4,6,8,10].map(function(h){return '<button data-preset="'+h+'" aria-pressed="false">'+h+' '+esc(uh)+'</button>'}).join('')+'</div></div>'+
  '<div id="pSpan" class="group" hidden>'+
    '<label class="frow" for="edStart"><span>'+esc(t('start'))+'</span><input id="edStart" type="time" value="'+ed.start+'"></label>'+
    '<label class="frow" for="edEnd"><span>'+esc(t('end'))+'</span><input id="edEnd" type="time" value="'+ed.end+'"></label>'+
    '<label class="frow" for="edBrk"><span>'+esc(t('brk'))+'</span><input id="edBrk" type="number" inputmode="numeric" min="0" max="600" step="5" value="'+ed.brk+'"></label></div>'+
  '<div class="group"><label class="frow wideinp" for="edNote"><input id="edNote" type="text" maxlength="120" placeholder="'+esc(t('notePh'))+'" value="'+esc(ed.note)+'"></label></div>'+
  '<div class="acts"><button class="btn primary" data-a="save">'+esc(t('save'))+'</button><button class="btn" data-a="savenext">'+esc(t('saveNext'))+'</button>'+(exists?'<button class="btn danger" data-a="del">'+esc(t('delEntry'))+'</button>':'')+'</div></div>';
}
function updateEditor(){
  var m=curMin(),n=store.settings.norm,r=store.settings.rate,s='';
  $('edTotal').textContent=fmtLong(m);
  if(n>0){var df=m-n;s=df===0?t('exact'):(df>0?t('overBy',{x:fmtLong(df)}):t('underBy',{x:fmtLong(-df)}))}
  if(r>0&&m>0)s+=(s?' · ':'')+money(m/60*r);
  $('edSub').textContent=s;
  $('mDur').setAttribute('aria-pressed',ed.mode==='dur');
  $('mSpan').setAttribute('aria-pressed',ed.mode==='span');
  $('pDur').hidden=ed.mode!=='dur';$('pSpan').hidden=ed.mode!=='span';
  Array.prototype.forEach.call(sheet.querySelectorAll('[data-preset]'),function(b){b.setAttribute('aria-pressed',String(ed.min===Number(b.dataset.preset)*60))});
}
function openEditor(k){
  var e=store.entries[k],d=parseKey(k);
  ed={key:k,mode:(e&&e.mode)||'dur',min:e?e.min:(isWork(d)?store.settings.norm:0),
      start:(e&&e.start)||'09:00',end:(e&&e.end)||'17:30',brk:(e&&e.brk!=null)?e.brk:30,note:e?(e.note||''):''};
  openSheet(editorHTML(),'editor');updateEditor();
}
function saveEntry(){
  var m=curMin(),note=ed.note.trim(),old=store.entries[ed.key];
  if(m<=0&&!note){delete store.entries[ed.key]}
  else{
    var e={min:m};
    if(note)e.note=note;
    else if(old&&old.sk&&!old.note)e.sk=old.sk;
    if(ed.mode==='span'){e.mode='span';e.start=ed.start;e.end=ed.end;e.brk=ed.brk}
    store.entries[ed.key]=e;
  }
  save();render();
}

/* ---------- настройки ---------- */
function langOptions(){
  var h='<option value="auto"'+(store.settings.lang==='auto'?' selected':'')+'>'+esc(t('auto'))+'</option>';
  LANGS.forEach(function(l){h+='<option value="'+l[0]+'"'+(store.settings.lang===l[0]?' selected':'')+'>'+esc(l[1])+'</option>'});
  return h;
}
function curOptions(){
  var h='<option value="auto"'+(store.settings.cur==='auto'?' selected':'')+'>'+esc(t('auto')+' ('+cur+')')+'</option>';
  CURS.forEach(function(c){h+='<option value="'+c+'"'+(store.settings.cur===c?' selected':'')+'>'+esc(c+' · '+curName(c))+'</option>'});
  return h;
}
function settingsHTML(){
  var s=store.settings;
  return '<div class="sheet-in"><div class="grab"></div>'+
  '<div class="shead"><span></span><h2 id="sheetTitle">'+esc(t('settings'))+'</h2><button class="txt strong" data-a="close">'+esc(t('done'))+'</button></div>'+
  '<div class="group"><label class="frow" for="setLang"><span>'+esc(t('language'))+'</span><select id="setLang">'+langOptions()+'</select></label>'+
  '<label class="frow" for="setCur"><span>'+esc(t('currency'))+'</span><select id="setCur">'+curOptions()+'</select></label></div>'+
  '<div class="fnote">'+esc(t('curNote'))+'</div>'+
  '<div class="group"><label class="frow" for="setNorm"><span>'+esc(t('normPerDay'))+'</span><input id="setNorm" type="number" inputmode="decimal" min="0" max="24" step="0.5" value="'+(s.norm/60)+'"></label>'+
  '<label class="frow" for="setRate"><span>'+esc(t('rate',{c:curSymbol()}))+'</span><input id="setRate" type="number" inputmode="decimal" min="0" step="0.5" placeholder="'+esc(t('rateNone'))+'" value="'+(s.rate>0?s.rate:'')+'"></label></div>'+
  '<div class="gl">'+esc(t('workDays'))+'</div><div class="wds">'+[1,2,3,4,5,6,0].map(function(d){var on=s.days.indexOf(d)>-1;return '<button class="wd'+(on?' on':'')+'" data-wd="'+d+'" aria-pressed="'+on+'">'+esc(wdShort(addDays(new Date(2024,0,1),(d+6)%7)))+'</button>'}).join('')+'</div>'+
  '<div class="gl">'+esc(t('backup'))+'</div><p class="fnote" style="margin-top:0">'+esc(t('backupNote'))+'</p>'+
  '<div class="acts"><button class="btn" data-a="backup">'+esc(t('backupSave'))+'</button>'+
  '<label class="btn" for="restoreFile">'+esc(t('backupRestore'))+'</label><input id="restoreFile" type="file" accept="application/json,.json" hidden>'+
  '<div id="restoreBox"></div></div>'+
  '<div class="acts" style="margin-top:12px"><button class="btn" data-a="copy">'+esc(t('copyReport',{p:state.view==='month'?t('periodMonth'):t('periodWeek')}))+'</button>'+
  '<textarea id="rep" class="rep" readonly hidden aria-label="'+esc(t('repAria'))+'"></textarea>'+
  '<button class="btn danger" data-a="clearall" id="clr">'+esc(t('clearAll'))+'</button></div>'+
  '<div class="brand"><img src="icon-192.png" alt="" width="48" height="48"><b>WorkTime</b></div>'+
  '<p class="foot">'+esc(t('footer'))+'</p></div>';
}
function reportText(){
  var per=period(),st=stats(per.from,per.to);
  var L0=[t('reportTitle')+' — '+(state.view==='month'?per.title.toLowerCase()+' '+state.cursor.getFullYear():per.title+' ('+per.sub+')')];
  for(var d=per.from;d<=per.to;d=addDays(d,1)){
    var e=store.entries[key(d)];
    if(e&&e.min>0){var nt=noteOf(e);L0.push(pad(d.getDate())+'.'+pad(d.getMonth()+1)+'.'+d.getFullYear()+' '+wdShort(d)+'  '+fmtHM(e.min)+(nt?'  '+nt:''))}
  }
  L0.push(t('reportTotal',{x:fmtHM(st.total),n:st.days}));
  if(st.goal>0)L0.push(t('reportNorm',{x:fmtHM(st.goal)}));
  if(store.settings.rate>0)L0.push(t('reportEarned',{x:money(st.total/60*store.settings.rate)}));
  return L0.join('\n');
}
function copyReport(){
  var txt=reportText();
  function fallback(){var ta=$('rep');if(!ta)return;ta.hidden=false;ta.value=txt;ta.focus();ta.select();toast(t('selectCopy'))}
  try{
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(function(){toast(t('copied'))},fallback);
    }else fallback();
  }catch(e){fallback()}
}
/* ---------- резервная копия ---------- */
var pendingRestore=null;
function backupJSON(){
  return JSON.stringify({app:'work-calendar',version:1,exportedAt:new Date().toISOString(),entries:store.entries,settings:store.settings},null,2);
}
function exportBackup(){
  var json=backupJSON(),name='worktime-backup-'+key(today())+'.json';
  var C=window.Capacitor,P=C&&C.Plugins,native=!!(C&&C.isNativePlatform&&C.isNativePlatform());
  if(native&&P&&P.Filesystem&&P.Share){
    P.Filesystem.writeFile({path:name,data:json,directory:'CACHE',encoding:'utf8'}).then(function(r){
      return P.Share.share({title:name,files:[r.uri],dialogTitle:t('backupShareTitle')});
    }).catch(function(e){if(!/cancel/i.test(String((e&&e.message)||e)))toast(t('backupFail'))});
    return;
  }
  try{
    var file=new File([json],name,{type:'application/json'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:name}).catch(function(){});return}
  }catch(e){}
  try{
    var a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([json],{type:'application/json'}));a.download=name;
    document.body.appendChild(a);a.click();
    setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1000);
    toast(t('backupSaved'));
  }catch(e){toast(t('backupFail'))}
}
function cleanBackup(o){
  if(!o||o.app!=='work-calendar'||!o.entries||typeof o.entries!=='object')return null;
  var out={entries:{},settings:null},n=0;
  Object.keys(o.entries).forEach(function(k){
    var e=o.entries[k];
    if(!/^\d{4}-\d{2}-\d{2}$/.test(k)||!e||typeof e.min!=='number'||!isFinite(e.min)||e.min<0||e.min>1440)return;
    var c={min:Math.round(e.min)};
    if(typeof e.note==='string'&&e.note)c.note=e.note.slice(0,120);
    if(e.sk===1||e.sk===2)c.sk=e.sk;
    if(e.mode==='span'&&/^\d{2}:\d{2}$/.test(e.start||'')&&/^\d{2}:\d{2}$/.test(e.end||'')){
      c.mode='span';c.start=e.start;c.end=e.end;c.brk=Math.max(0,Math.min(600,parseInt(e.brk,10)||0));
    }
    out.entries[k]=c;n++;
  });
  var s=o.settings||{},cs=store.settings;
  out.settings={
    norm:(typeof s.norm==='number'&&s.norm>=0&&s.norm<=1440)?Math.round(s.norm):cs.norm,
    rate:(typeof s.rate==='number'&&s.rate>=0)?s.rate:cs.rate,
    days:Array.isArray(s.days)?s.days.filter(function(d){return d===(d|0)&&d>=0&&d<=6}):cs.days,
    lang:(s.lang==='auto'||D[s.lang])?s.lang:'auto',
    cur:(s.cur==='auto'||CURS.indexOf(s.cur)>-1)?s.cur:'auto'
  };
  out.count=n;
  return out;
}
function onRestoreFile(input){
  var f=input.files&&input.files[0];input.value='';
  if(!f)return;
  var box=$('restoreBox');
  var r=new FileReader();
  r.onload=function(){
    var data=null;
    try{data=cleanBackup(JSON.parse(String(r.result)))}catch(e){}
    if(!data){pendingRestore=null;if(box)box.innerHTML='';toast(t('restoreBad'));return}
    pendingRestore=data;
    if(box)box.innerHTML='<div class="group"><div class="frow"><span>'+esc(t('restoreAsk',{n:data.count}))+'</span></div></div>'+
      '<div class="acts"><button class="btn primary" data-a="restoreyes">'+esc(t('restoreYes'))+'</button><button class="btn" data-a="restoreno">'+esc(t('restoreNo'))+'</button></div>';
  };
  r.onerror=function(){toast(t('restoreBad'))};
  r.readAsText(f);
}
function applyRestore(){
  if(!pendingRestore)return;
  store.entries=pendingRestore.entries;store.settings=pendingRestore.settings;store.sample=false;
  pendingRestore=null;save();applyLocale();render();
  if(sheetKind==='settings')sheet.innerHTML=settingsHTML();
  toast(t('restoreDone'));
}
function relocalize(focusId){
  applyLocale();render();
  if(sheetKind==='settings'){
    sheet.innerHTML=settingsHTML();
    var f=focusId&&$(focusId);if(f)try{f.focus({preventScroll:true})}catch(e){}
  }
}

/* ---------- события ---------- */
document.addEventListener('click',function(ev){
  var el=ev.target.closest('[data-a],[data-day],[data-week],[data-view],[data-step],[data-preset],[data-mode],[data-wd]');
  if(!el)return;
  var ds=el.dataset;
  if(ds.view){
    if(state.view!==ds.view){
      var t0=today(),c=state.cursor;
      if(ds.view==='week'&&c.getFullYear()===t0.getFullYear()&&c.getMonth()===t0.getMonth())state.cursor=t0;
      state.view=ds.view;render();
    }
    return;
  }
  if(ds.day){openEditor(ds.day);return}
  if(ds.week){state.view='week';state.cursor=parseKey(ds.week);render();window.scrollTo(0,0);return}
  if(ds.step&&ed){ed.min=Math.max(0,Math.min(1440,ed.min+Number(ds.step)));updateEditor();return}
  if(ds.preset&&ed){ed.min=Number(ds.preset)*60;updateEditor();return}
  if(ds.mode&&ed){ed.mode=ds.mode;updateEditor();return}
  if(ds.wd!==undefined){
    var w=Number(ds.wd),a=store.settings.days,i=a.indexOf(w);
    if(i>-1)a.splice(i,1);else a.push(w);
    el.classList.toggle('on',i===-1);el.setAttribute('aria-pressed',String(i===-1));
    save();render();return;
  }
  switch(ds.a){
    case 'prev':shift(-1);break;
    case 'next':shift(1);break;
    case 'today':state.cursor=today();render();break;
    case 'settings':pendingRestore=null;openSheet(settingsHTML(),'settings');break;
    case 'close':closeSheet();break;
    case 'save':if(ed){saveEntry();closeSheet();toast(t('saved'))}break;
    case 'savenext':if(ed){var nk=key(addDays(parseKey(ed.key),1));saveEntry();openEditor(nk);toast(t('saved'))}break;
    case 'del':if(ed){delete store.entries[ed.key];save();render();closeSheet();toast(t('deleted'))}break;
    case 'clearsample':store.entries={};store.sample=false;save();render();break;
    case 'copy':copyReport();break;
    case 'backup':exportBackup();break;
    case 'restoreyes':applyRestore();break;
    case 'restoreno':pendingRestore=null;var rb=$('restoreBox');if(rb)rb.innerHTML='';break;
    case 'clearall':
      if(el.dataset.sure){store.entries={};store.sample=false;save();render();closeSheet();toast(t('cleared'))}
      else{el.dataset.sure='1';el.textContent=t('clearSure');setTimeout(function(){if(el.isConnected){delete el.dataset.sure;el.textContent=t('clearAll')}},4000)}
      break;
  }
});
document.addEventListener('input',function(ev){
  var id=ev.target.id,v=ev.target.value;
  if(ed){
    if(id==='edStart')ed.start=v;
    else if(id==='edEnd')ed.end=v;
    else if(id==='edBrk')ed.brk=Math.max(0,Math.min(600,parseInt(v,10)||0));
    else if(id==='edNote')ed.note=v;
    else return;
    updateEditor();return;
  }
  if(id==='setNorm'){var n=parseFloat(String(v).replace(',','.'));if(isFinite(n)&&n>=0&&n<=24){store.settings.norm=Math.round(n*60);save();render()}}
  else if(id==='setRate'){var r=parseFloat(String(v).replace(',','.'));store.settings.rate=isFinite(r)&&r>0?r:0;save();render()}
});
document.addEventListener('change',function(ev){
  var id=ev.target.id,v=ev.target.value;
  if(id==='restoreFile'){onRestoreFile(ev.target);return}
  if(id==='setLang'){store.settings.lang=v;save();relocalize('setLang')}
  else if(id==='setCur'){store.settings.cur=v;save();relocalize('setCur')}
});
document.addEventListener('keydown',function(ev){if(ev.key==='Escape')closeSheet()});
var tx=0,ty=0;
main.addEventListener('touchstart',function(e){var p=e.changedTouches[0];tx=p.clientX;ty=p.clientY},{passive:true});
main.addEventListener('touchend',function(e){
  if(sheetKind)return;
  var p=e.changedTouches[0],dx=p.clientX-tx,dy=p.clientY-ty;
  if(Math.abs(dx)>70&&Math.abs(dy)<40)shift(dx<0?1:-1);
},{passive:true});

load();
if(store.sample)state.view='week';
applyLocale();
render();
})();
