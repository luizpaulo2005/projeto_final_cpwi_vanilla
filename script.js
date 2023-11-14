// Times: Front-end, DataScience, Devops, UX e Design, Mobile, Inovação e Gestão

const submit_button = document.querySelector("#submit_button");

const input_nome = document.querySelector("#input_nome");
const input_profissao = document.querySelector("#input_profissao");
const input_imagem = document.querySelector("#input_imagem");
const input_time = document.querySelector("#input_time");

const div_times = document.querySelector("#div_times");

const div_frontend = document.querySelector("#div_frontend");
const div_datascience = document.querySelector("#div_datascience");
const div_devops = document.querySelector("#div_devops");
const div_ux = document.querySelector("#div_ux");
const div_mobile = document.querySelector("#div_mobile");
const div_inovacao = document.querySelector("#div_inovacao");

const times = [
  "Front-end",
  "Data Science",
  "DevOps",
  "UX e Design",
  "Mobile",
  "Inovação e Gestão",
];
const pessoas = [];

for (const time of times) {
  input_time.innerHTML += `
    <option id="option_select_times_${times.indexOf(time)}">${time}</option>
    `;
}

const adicionarPessoa = (e) => {
  e.preventDefault();

  if (input_nome.value === "" || input_profissao.value === "" || input_imagem.value === "" || input_time.value === "") {
    alert("Preencha todos os campos")
  } else {
    const pessoa = {
      nome: input_nome.value,
      profissao: input_profissao.value,
      imagem: input_imagem.value,
      time: input_time.value,
    };
    pessoas.push(pessoa);
  
    renderizarPessoas();
  }

  
};

const renderizarPessoas = () => {
  div_frontend.innerHTML = "";
  div_datascience.innerHTML = "";
  div_devops.innerHTML = "";
  div_ux.innerHTML = "";
  div_mobile.innerHTML = "";
  div_inovacao.innerHTML = "";

  const renderizarTime = (time, div) => {
    const pessoasDoTime = pessoas.filter((pessoa) => pessoa.time === time);

    if (pessoasDoTime.length === 0) {
      div.innerHTML = "<p>Sem pessoas nesse time</p>";
    } else {
      pessoasDoTime.forEach((pessoa) => {
        div.innerHTML += `
          <div id=${pessoas.indexOf(
            pessoa
          )} class="max-w-xs w-full flex flex-col bg-slate-700 px-4 py-2 rounded-md items-center justify-between">
            <img src="./trash-2.png" class="self-end p-1 rounded-md transition-colors hover:bg-red-500" onclick="excluirPessoa(${pessoas.indexOf(pessoa)})">
            <img src="${pessoa.imagem}" class="w-32 h-32 rounded-md">
            <span>${pessoa.nome}</span>
            <span>${pessoa.profissao}</span>
          </div>
        `;
      });
    }
  };

  renderizarTime(times[0], div_frontend);
  renderizarTime(times[1], div_datascience);
  renderizarTime(times[2], div_devops);
  renderizarTime(times[3], div_ux);
  renderizarTime(times[4], div_mobile);
  renderizarTime(times[5], div_inovacao);
};

const excluirPessoa = (id) => {
  pessoas.splice(id, 1);
  renderizarPessoas();
};

submit_button.addEventListener("click", adicionarPessoa);
document.querySelector("body").onload = renderizarPessoas();
