const btns = document.querySelectorAll('.sidebar nav button');
btns.forEach(b=>b.addEventListener('click',()=>{
  btns.forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(b.dataset.sec).classList.add('active');
}));

document.getElementById('toggle-theme').onclick = () => document.documentElement.classList.toggle('dark');

document.getElementById('saveNote').onclick = () => {
  const text = document.getElementById('noteInput').value;
  if(text) {
    const ul = document.getElementById('noteList');
    const li = document.createElement('li'); li.innerText = text; ul.appendChild(li);
    document.getElementById('noteInput').value = '';
  }
};

document.getElementById('docInput').onchange = e => {
  const ul = document.getElementById('docList'); ul.innerHTML = '';
  [...e.target.files].forEach(f=>{
    const a = document.createElement('a'); a.href = URL.createObjectURL(f);
    a.download = f.name; a.innerText = f.name;
    const li = document.createElement('li'); li.appendChild(a); ul.appendChild(li);
  });
};

document.getElementById('photoInput').onchange = e => {
  const div = document.getElementById('photoList'); div.innerHTML = '';
  [...e.target.files].forEach(f=>{
    const r = new FileReader(); r.onload = ()=>{ const img = document.createElement('img');
      img.src = r.result; img.style.width='100px'; img.style.margin='5px'; div.appendChild(img);
    }; r.readAsDataURL(f);
  });
};

document.getElementById('folderInput').onchange = e => {
  const ul = document.getElementById('folderList'); ul.innerHTML = '';
  [...e.target.files].forEach(f=>{ const li = document.createElement('li');
    li.innerText = f.webkitRelativePath; ul.appendChild(li);
  });
};
