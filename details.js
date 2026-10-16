'use strict';
// Coordinates use the reviewed template previews (130%); converted to PDF points at write time.
const detailSchema={common:[],garage:[],industrial:[],fence:[],door:[]};
function detail(key,id,label,group,kind='text',options=[],position=null){const f={id,label,group,kind,options,position};detailSchema[key].push(f);return f}
const put=(key,id,label,group,x,y,w=90,page=0,kind='text')=>detail(key,id,label,group,kind,[],[x,y,w,page]);
const choose=(key,id,label,group,options,positions)=>{const f=detail(key,id,label,group,'select',options);f.marks=positions;return f};
const tick=(key,id,label,group,x,y,page=0)=>{const f=detail(key,id,label,group,'select',['Так','Ні']);f.marks={'Так':[x,y,9,page]};return f};
for(const [id,label] of [['city','Індекс / місто'],['project','Будівельний проєкт'],['mobile','Мобільний телефон'],['offer','№ пропозиції'],['approval','Дата затвердження'],['order','№ замовлення'],['sent','Відправлено'],['delivery','Дата поставки'],['installation','Дата монтажу'],['measured','Дата заміру'],['representative','Замовник / представник'],['logistics','Логіст'],['kvr','КВР']])detail('common',id,label,'Реквізити',['approval','delivery','installation','measured','sent'].includes(id)?'date':'text');
choose('garage','model','Модель воріт','Конструкція',['PRIME','UniTherm','UniPro'],{'PRIME':[191,177,9],'UniTherm':[370,177,9],'UniPro':[557,177,9]});
choose('garage','pattern','Тип тиснення / узору','Конструкція',['Вузьке горизонтальне','Широке горизонтальне','Без тиснення','Мікропрофілювання','Касетне'],Object.fromEntries(['Вузьке горизонтальне','Широке горизонтальне','Без тиснення','Мікропрофілювання','Касетне'].map((s,i)=>[s,[197+i*66,198,8]])));
choose('garage','spring','Тип пружин / направляючих за схемою бланка','Конструкція',['N','Sp','St','Sj','SpA','StA'],Object.fromEntries(['N','Sp','St','Sj','SpA','StA'].map((s,i)=>[s,[193+i*61,258,8]])));
put('garage','structure','Структура поверхні','Конструкція',620,302,75);
choose('garage','drive','Привід воріт','Керування',['Автоматичне','Ручне','Підготовка під автоматику'],{'Автоматичне':[226,320,9],'Ручне':[350,320,9],'Підготовка під автоматику':[427,320,9]});
choose('garage','entrance','Додатковий вхід','Додатковий вхід',['Так','Ні','Потрібні технічні двері','У воротах'],{'Так':[225,339,9],'Ні':[284,339,9],'Потрібні технічні двері':[326,339,9],'У воротах':[512,339,9]});
for(const [id,l,x] of [['smartphone','Смартфон',225],['remote','Пульт дистанційного керування',341],['gsm','GSM-модуль',488],['button','Кнопка',603]])tick('garage',id,l,'Керування',x,357);
put('garage','remotes','Кількість пультів','Керування',432,358,24,0,'numeric');
choose('industrial','model','Модель воріт','Конструкція',['MakroPro','Invest','MakroTherm','XXL','ALU'],{'MakroPro':[191,177,9],'Invest':[319,177,9],'MakroTherm':[400,177,9],'XXL':[598,177,9],'ALU':[629,177,9]});
put('industrial','number','№ воріт','Конструкція',174,242,43,0,'numeric');
choose('industrial','pattern','Тип тиснення / узору','Конструкція',['Вузьке горизонтальне','Широке горизонтальне','Без тиснення','Мікропрофілювання'],Object.fromEntries(['Вузьке горизонтальне','Широке горизонтальне','Без тиснення','Мікропрофілювання'].map((s,i)=>[s,[341+i*66,201,8]])));
choose('industrial','guides','Направляючі','Конструкція',['STL','LH','LHp','LHpz','HL','HLO','VL','VLO','STLK, HLK'],Object.fromEntries(['STL','LH','LHp','LHpz','HL','HLO','VL','VLO','STLK, HLK'].map((s,i)=>[s,[[187,250,305,357,416,460,514,558,615][i],262,9]])));
choose('industrial','cycles','Ресурс пружин, циклів','Конструкція',['50 000','100 000'],{'50 000':[205,281,9],'100 000':[290,281,9]});
tick('industrial','galvanized','Оцинковані пружини','Конструкція',380,281);tick('industrial','anticorrosion','Антикорозійний комплект','Конструкція',485,281);
for(const [id,l,x] of [['impulse','Impulse',168],['totman','Totman',246],['chain','Ланцюговий редуктор',326],['tensioner','Напинач ланцюга',499],['cord','Шнур',643]])tick('industrial',id,l,'Керування',x,300);
choose('industrial','entrance','Додатковий вхід','Додатковий вхід',['Так','Ні','Вбудовані двері'],{'Так':[217,319,9],'Ні':[265,319,9],'Вбудовані двері':[304,319,9]});
choose('industrial','entranceSide','Розташування входу','Додатковий вхід',['Зліва','Центр','Справа'],{'Зліва':[434,319,9],'Центр':[485,319,9],'Справа':[542,319,9]});
choose('industrial','threshold','Поріг','Додатковий вхід',['Високий','Низький'],{'Високий':[646,319,9],'Низький':[671,319,9]});
for(const [id,l,x] of [['closerRail','Доводчик: шина ковзання',153],['closerChain','Доводчик: ланцюговий',287],['hangers','Підвіси',405],['bolt','Засув',570],['lock','Замок',635]])tick('industrial',id,l,'Комплектація',x,338);
put('industrial','hangerLength','Довжина підвісів, мм','Комплектація',483,338,43,0,'numeric');
choose('industrial','window','Тип вікон','Скління',['B1','B2','B3','A1'],{'B1':[168,357,9],'B2':[194,357,9],'B3':[218,357,9],'A1':[264,357,9]});
put('industrial','windowPanels','Номери панелей із вікнами','Скління',363,357,66);put('industrial','windowCounts','Кількість вікон у кожній панелі','Скління',497,357,65);
tick('industrial','windowScratch','Вікна No SCRATCH','Скління',573,357);
choose('industrial','alu','Тип ALU','Скління',['SZx1','SZx2'],{'SZx1':[149,376,9],'SZx2':[198,376,9]});
for(const [id,l,x] of [['aluScratch','ALU No SCRATCH',252],['airGrille','Air grille',364],['thermal','Thermal Frame',504],['gas','Gas ven',623]])tick('industrial',id,l,'Скління',x,376);
detail('industrial','airGrilleType','Air grille: K / 1 / 2 / 3','Скління','select',['K','1','2','3']);
for(const key of ['garage','industrial','door']){
 const wallY=key==='garage'?947:key==='industrial'?965:974,floorY=key==='garage'?979:key==='industrial'?997:990;
 choose(key,'wall','Матеріал стін','Монтаж',['Цегла','Бетон','К/М','Пористий блок','Дерево','Сендвіч'],Object.fromEntries(['Цегла','Бетон','К/М','Пористий блок','Дерево','Сендвіч'].map((s,i)=>[s,[[206,288,370,436,556,631][i],wallY,9]])));
 if(key!=='door'){
 choose(key,'ceiling','Матеріал стелі','Монтаж',['Бетон','Металоконструкція','Дерево','Інше'],Object.fromEntries(['Бетон','Металоконструкція','Дерево','Інше'].map((s,i)=>[s,[[206,288,417,490][i],wallY+16,9]])));
 put(key,'ceilingOther','Інший матеріал стелі','Монтаж',504,wallY+16,76);
 put(key,'slope','Скіс / кут стелі X (значення та одиниця)','Додаткові заміри',162,key==='garage'?465:484,35);
 put(key,'depth','Глибина приміщення E0, мм','Додаткові заміри',192,key==='garage'?844:859,43,0,'numeric');
 put(key,'heightLeft','Висота зліва, мм','Додаткові заміри',119,key==='garage'?747:765,42,0,'numeric');
 put(key,'heightRight','Висота справа, мм','Додаткові заміри',633,key==='garage'?747:765,42,0,'numeric');
 }
 choose(key,'floor','Стан підлоги','Монтаж',['Чистова','Чорнова стяжка','Відсутня'],{'Чистова':[204,floorY,9],'Чорнова стяжка':[289,floorY,9],'Відсутня':[465,floorY,9]});
 put(key,'screed','Товщина майбутньої стяжки, мм','Монтаж',411,floorY,24,0,'numeric');put(key,'floorDrop','Відмітка відсутньої підлоги H=−, мм','Монтаж',563,floorY,24,0,'numeric');
}
for(const [id,l,x,w] of [['frame','Коробка',226,63],['zero','Позначка «0»',294,16],['wallSize','Стіна / товщина, мм',316,49],['closer','Доводчик',467,73],['glazing','Зашклення',546,79],['hardware','Фурнітура',632,83]])put('door',id,l,'Комплектація',x,237,w);
// Fence details match the side tables and lower schedule.
put('fence','activeSide','Активна стулка розпашних воріт','Ворота',680,279,51);
choose('fence','drive','Привід воріт','Ворота',['Ручні','Підготовка','Автоматика'],null);
for(const [id,l,y] of [['stop','Упор хвіртки',554],['opening','Відкривання хвіртки',572],['lock','Замок хвіртки',589],['electricLock','Електрозамок хвіртки',606],['mailbox','Поштова скринька',623],['gateFoundation','Фундамент воріт',676],['fenceFoundation','Фундамент огорожі',693],['electricity','Електрика',710],['marking','Розмітка',727],['galvanizing','Оцинк',780],['structure','Структура',797]])put('fence',id,l,y<650?'Хвіртка':y<750?'Підготовчі роботи':'Покриття',y<750?708:665,y,y<750?25:51);
put('fence','manager','Менеджер','Реквізити',469,991,110);
const sectionDetails=[['segment','Позначення відрізка'],['length','Довжина відрізка, мм'],['posts','Стовпи'],['aw','AW'],['otherWidth','Інша ширина, мм'],['otherHeight','Інша висота, мм'],['material','Матеріал'],['series','Серія'],['base','Підмуровка, мм']];
for(const key of ['industrial','door']){
 for(const [i,role] of ['Відповідальна особа на об’єкті','Будівельник','Електрик','Проєктант','Технагляд','Охорона','Склад','Інший контакт 1','Інший контакт 2'].entries()){
 put(key,'contact'+i,role+' — ім’я / фірма','Контакти на об’єкті',308,215+i*20,241,1);put(key,'phone'+i,role+' — телефон','Контакти на об’єкті',557,215+i*20,148,1);
 }
 for(const [id,l,x,y] of [['scaffold','Риштування',84,431],['lift','Підіймач / піканіска',194,431],['loader','Навантажувач',294,431],['unloaders','Люди для розвантаження',419,431],['storage','Складське приміщення',610,431],['toolStorage','Приміщення для інструменту',166,446],['helper','Помічник для сторонніх робіт',442,446]])tick(key,id,l,'Замовник надає',x,y,1);
 for(const [i,l] of ['Вирівнювання стін прорізу','Виготовлення конструкцій','Кабель живлення','Комутуючі кабелі','Доставка обладнання','Розвантаження обладнання','Інші роботи'].entries()){
 put(key,'work'+i,l+' — виконавець','Підготовчі роботи',419,502+i*20,157,1);put(key,'workDate'+i,l+' — дата','Підготовчі роботи',584,502+i*20,120,1,'date');
 }
 put(key,'siteNotes','Інші важливі примітки щодо об’єкта та робіт','Примітки',87,680,615,1,'textarea');
}
for(const f of detailSchema.fence){if(['stop','lock','electricLock','mailbox','galvanizing'].includes(f.id)){f.kind='select';f.options=['Так','Ні']}if(f.id==='activeSide'){f.kind='select';f.options=['Ліва','Права']}if(f.id==='opening'){f.kind='select';f.options=['ЛН','ЛВ','ПН','ПВ'];f.label+=' (Л/П — сторона, Н/В — назовні/всередину)'}}
function ensureDetails(target=state){const state=target;state.details??={};for(const key of Object.keys(detailSchema))state.details[key]??={};for(const s of state.sections)s.details??={}}
ensureDetails();
function detailControl(f,value,path){const attr=`data-path="${path}"`;let input;if(f.kind==='select')input=`<select ${attr}><option value="">Не обрано</option>${f.options.map(v=>`<option value="${esc(v)}" ${value===v?'selected':''}>${esc(v)}</option>`).join('')}</select>`;else if(f.kind==='textarea')input=`<textarea ${attr} maxlength="5000">${esc(value)}</textarea>`;else input=`<input ${attr} type="${f.kind==='date'?'date':'text'}" ${f.kind==='numeric'?'data-numeric="true" inputmode="numeric" pattern="[0-9]*" maxlength="7"':'maxlength="250"'} value="${esc(value)}">`;return `<label class="${f.kind==='textarea'?'wide':''}">${esc(f.label)}${input}</label>`}
let detailsOpen=false;
function renderDetailMenu(){ensureDetails();const key=state.tab,box=document.createElement('section');box.className='detail-menu';box.innerHTML=`<button type="button" class="secondary" id="detail-toggle" aria-expanded="${detailsOpen}" aria-controls="detail-panel">Деталі <span aria-hidden="true">${detailsOpen?'−':'＋'}</span></button><div id="detail-panel" ${detailsOpen?'':'hidden'}><p class="status">Додаткові поля бланка. Заповнюйте лише потрібне; дані зберігаються автоматично.</p></div>`;$('#form').append(box);const panel=box.querySelector('#detail-panel');for(const category of [key,'common']){const schema=detailSchema[category];for(const group of [...new Set(schema.map(f=>f.group))]){const block=document.createElement('details');block.open=category===key&&group===schema[0]?.group;block.innerHTML=`<summary>${esc(group)}${category==='common'?' · спільні для об’єкта':''}</summary><div class="grid">${schema.filter(f=>f.group===group).map(f=>detailControl(f,state.details[category][f.id]||'',`details.${category}.${f.id}`)).join('')}</div>`;panel.append(block)}}if(key==='fence'&&state.sub==='section'){state.sections.forEach((s,i)=>{const block=document.createElement('details');block.innerHTML=`<summary>Секція ${i+1} · деталі</summary><div class="grid">${sectionDetails.map(([id,label])=>detailControl({id,label,kind:['length','otherWidth','otherHeight','base'].includes(id)?'numeric':'text'},s.details[id]||'',`sections.${i}.details.${id}`)).join('')}</div>`;panel.append(block)})}box.querySelector('#detail-toggle').onclick=()=>{detailsOpen=!detailsOpen;panel.hidden=!detailsOpen;box.querySelector('button').setAttribute('aria-expanded',String(detailsOpen));box.querySelector('span').textContent=detailsOpen?'−':'＋'}}
const renderBeforeDetails=render;render=()=>{ensureDetails();renderBeforeDetails();renderDetailMenu()};
// Each duplicate owns its own details; editing one section must not change another.
document.addEventListener('input',e=>{const p=e.target.dataset.path;if(!p)return;const [root,key,id]=p.split('.');if(root==='details'&&id==='drive'){const d=key==='fence'?state.fenceGate:state[key];if(d){d.automatic=['Автоматичне','Автоматика'].includes(e.target.value);const el=document.querySelector(`[data-path="${key==='fence'?'fenceGate':key}.automatic"]`);if(el)el.checked=d.automatic;save()}}else if(key==='automatic'){const k=root==='fenceGate'?'fence':root;if(['garage','fence'].includes(k)){state.details[k].drive=e.target.checked?(k==='garage'?'Автоматичне':'Автоматика'):'';const el=document.querySelector(`[data-path="details.${k}.drive"]`);if(el)el.value=state.details[k].drive;save()}}});
function detailRows(key){const d=state.details[key]||{};return Object.fromEntries(detailSchema[key].filter(f=>d[f.id]).map(f=>[f.label,d[f.id]]))}
const groupsBeforeDetails=reportGroups;reportGroups=()=>{ensureDetails();const out=groupsBeforeDetails().map(([name,d])=>[name,Object.fromEntries(Object.entries(d).filter(([k])=>k!=='details'))]);for(const key of Object.keys(detailSchema)){const rows=detailRows(key);if(Object.keys(rows).length)out.push([key==='common'?'Реквізити об’єкта':categoryNames[key]+' · деталі',rows])}state.sections.forEach((s,i)=>{const rows=Object.fromEntries(sectionDetails.filter(([id])=>s.details[id]).map(([id,l])=>[l,s.details[id]]));if(Object.keys(rows).length)out.push([`Секція ${i+1} · деталі`,rows])});return out};
function categoryHasDetails(key,target=state){const state=target;return Object.values(state.details?.[key]||{}).some(Boolean)||(key==='fence'&&state.sections.some(s=>Object.values(s.details||{}).some(Boolean)))}
async function fillDetailPDF(doc,pages,key,target=state){const state=target;ensureDetails(state);const d=state.details[key],common=state.details.common;
 async function write(value,pos,size=8){if(!value||!pos)return;const [x,y,w=90,page=0]=pos;if(pages[page])await pdfText(doc,pages[page],value,x/1.3,y/1.3,w/1.3,size)}
 for(const f of detailSchema[key]){const value=d[f.id];if(!value)continue;if(f.kind==='textarea'&&f.position){const lines=String(value).match(/[^\n]{1,92}(?:\s|$)|[^\n]{1,92}/g)||[];for(const [i,line] of lines.slice(0,12).entries())await write(line,[f.position[0],f.position[1]+i*20,f.position[2],f.position[3]],8)}else if(f.position)await write(value,f.position);else if(f.marks?.[value])await write('×',f.marks[value],9)}
 // Repeat shared header values on each original template page.
 const fence=key==='fence',leftX=fence?395:416,rightX=fence?616:625,width=fence?103:83,ys=fence?[75,92,109,126,143,160]:[48,67,85,104,123,141];
 const leftValues=key==='garage'?[state.meta.client,state.object,common.city,common.project,state.meta.phone,common.mobile]:[state.meta.client,common.project,common.city,state.object,state.meta.phone,common.mobile];
 for(let page=0;page<pages.length;page++)for(let i=0;i<6;i++){await write(leftValues[i],[leftX,ys[i],fence?103:82,page]);await write(common[['offer','approval','order','sent','delivery','installation'][i]],[rightX,ys[i],width,page])}
 if(key==='door'){const x={CREO:183,Deco:274,'Профільні':353,ECO:466,'Вогнестійкі':543}[state.door.model];if(x)await write('×',[x,179,9],9)}
 if(key==='garage'){await write(common.representative,[559,1015,140]);if(!d.drive&&state.garage.automatic)await write('×',[226,320,9],9)}
 if(key==='industrial'||key==='door'){
 await write(common.measured,[190,936,105,1]);await write(state.meta.manager,[191,975,123,1]);await write(common.representative,[526,975,147,1]);await write(common.logistics,[305,1013,113,1]);await write(common.kvr,[563,1013,144,1]);
 }
 if(key==='fence'){
 const drive=d.drive||(state.fenceGate.automatic?'Автоматика':'');if(drive)await write('×',[712,(state.fenceGate.type==='sliding'?435:298)+['Ручні','Підготовка','Автоматика'].indexOf(drive)*17,10],9);
 const xs={segment:[110,12],length:[129,43],posts:[230,43],aw:[280,26],otherWidth:[395,54],otherHeight:[474,40],material:[522,72],series:[618,39],base:[664,39]};for(const [i,s] of state.sections.slice(0,6).entries())for(const [id,[x,w]] of Object.entries(xs)){if(id==='segment'&&i<4)continue;if(s.details[id]&&['posts','aw','otherWidth'].includes(id)){pages[0].drawRectangle({x:x/1.3,y:pages[0].getHeight()-(869+i*17+11)/1.3,width:w/1.3,height:12/1.3,color:PDFLib.rgb(1,1,1)})}await write(s.details[id],[x,869+i*17,w],7);}
 }
}
render();
