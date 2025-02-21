// Seleciona o elemento da lista de tarefas no DOM (um <ul>  com o id "taskList")
const taskList = document.querySelector("#taskList");

// Seleciona o campo de entrada de texto (um <input> com o id "taskInput")
const taskInput = document.querySelector("#taskInput");

// Função para adicionar uma tarefa à lista
function addTask() {
  // Obtém o valor do input e remove espaços extras no início e no final com trim()
  const taskText = taskInput.value.trim();

  // Verifica se o valor do input não está vazio
  if (taskText !== "") {
    // Limita o texto da tarefa a 35 caracteres, caso seja mais longo
    const maxText = taskText.substring(0, 35);

    // Cria um novo elemento <li> para a tarefa
    const li = document.createElement("li");

    // Define o conteúdo HTML do <li>, incluindo o texto da tarefa e os botões de edição/remover
    li.innerHTML = `
      <span>${maxText}</span>
      <button class="editButton" onclick="editTask(this)">Editar</button>
      <button class="deleteButton" onclick="deleteTask(this)">Remover</button>
    `;

    // Adiciona o novo <li> como filho da lista de tarefas (taskList)
    taskList.appendChild(li);

    // Limpa o campo de entrada para que o usuário possa digitar uma nova tarefa
    taskInput.value = "";
  }
}

// Função para editar o texto de uma tarefa
function editTask(button) {
  // Obtém o elemento <li> pai do botão "Editar" clicado
  const li = button.parentElement;

  // Dentro do <li>, seleciona o elemento <span> que contém o texto da tarefa
  const span = li.querySelector("span");

  // Exibe um prompt para o usuário digitar o novo texto da tarefa
  const newText = prompt("Digite o novo texto da tarefa:", span.textContent);

  // Verifica se o novo texto não é nulo e não está vazio após remover espaços
  if (newText !== null && newText.trim() !== "") {
    // Atualiza o texto do <span> com o novo valor
    span.textContent = newText.trim();
  }
}

// Função para remover uma tarefa da lista
function deleteTask(button) {
  // Obtém o elemento <li> pai do botão "Remover" clicado
  const li = button.parentElement;

  // Remove o <li> correspondente da lista de tarefas (taskList)
  taskList.removeChild(li);
}

















particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
