const malla = [
{
semestre: "Bachillerato I",
ramos: [
"Antropología Filosófica",
"Lógica y Argumentación",
"Matemáticas I",
"Introducción a la Psicología"
]
},
{
semestre: "Bachillerato II",
ramos: [
"Teorías del Aprendizaje",
"Biología",
"Psicología Evolutiva",
"Fundamentos de la Ética"
]
},
{
semestre: "Semestre I",
ramos: [
"Bases Neurológicas del Comportamiento",
"Psicología del Desarrollo I",
"Teorías de la Personalidad",
"Metodología de la Investigación I"
]
}
];

const container = document.getElementById("malla-container");

malla.forEach(({ semestre, ramos }) => {
const box = document.createElement("div");
box.classList.add("semestre");

const title = document.createElement("h2");
title.textContent = semestre;
box.appendChild(title);

const list = document.createElement("ul");
ramos.forEach(ramo => {
const li = document.createElement("li");
li.textContent = ramo;
list.appendChild(li);
});

box.appendChild(list);
container.appendChild(box);
});
