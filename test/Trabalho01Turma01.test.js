const GerenciadorDeTarefas = require("../src/Trabalho01Turma01");

describe('Testes da classe Trabalho01Turma01', () => {
    let tasks;

    beforeEach(() => {
        tasks = new GerenciadorDeTarefas();
    });

    //Teste 1

    test('Adicionando uma tarefa', () => {
        const adicionando = {id: 1, descricao: 'Pagar a conta de luz', concluida: false}
        tasks.adicionarTarefa(adicionando)
        expect(tasks.tarefas).toContain(adicionando)
    })

    //Teste 2

    test('Removendo uma tarefa', () => {
        const adicionando = {id: 2, descricao: 'Ligar para a minha mãe', concluida: false}
        tasks.adicionarTarefa(adicionando)
        tasks.removerTarefa(2)
        expect(tasks.tarefas).not.toContain(adicionando)
    })

    //Teste 3

    test('Buscando uma tarefa pelo ID', () => {
        const adicionando = {id: 3, descricao: 'Pagar a conta de água', concluida: false}
        tasks.adicionarTarefa(adicionando)
        tasks.buscarTarefaPorId(3)
        expect(tasks.tarefas).toContain(adicionando)
    })

    //Teste 4

    test('Atualizando uma tarefa', () => {
        const adicionando = {id: 4, descricao: 'Comprar pão', concluida: false}
        tasks.adicionarTarefa(adicionando)
        const novoAdicionando = {id: 4, descricao: 'Comprar frutas', concluida: false}
        tasks.atualizarTarefa(4, novoAdicionando)
        expect(tasks.tarefas).toContainEqual(novoAdicionando)
    })

    //Teste 5

    test('Checando o tamanho das tarefas', () => {
        const adicionando = {id: 5, descricao: 'Ligar para o meu irmão', concluida: false}
        tasks.adicionarTarefa(adicionando)
        expect(tasks.tarefas).toHaveLength(1)
    })

    //Teste 6

    test('Checando o tamanho das tarefas (2)', () => {
        const adicionando = {id: 6, descricao: 'Ligar para o meu pai', concluida: false}
        tasks.adicionarTarefa(adicionando)
        expect(tasks.tarefas).not.toHaveLength(2)
    })
})