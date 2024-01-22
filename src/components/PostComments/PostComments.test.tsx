import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

//* Função que responsável por renderizar o componente e adicionar um comentário
const renderComments = (comment: string) => {
    render(<PostComment />);
    const textarea = screen.getByTestId('textarea');
    const btn = screen.getByTestId('post-btn');
    
    fireEvent.change(textarea, { target: { value: comment } });
    fireEvent.click(btn);
};

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    //* teste de renderização do comentário 1
    test('Deve adicionar o comentário "Muito bom"', () => {
        renderComments('Muito bom')
        expect(screen.getByText('Muito bom')).toBeInTheDocument();
    });

    //* teste de renderização do comentário 2
    test('Deve adicionar o comentário "Gostei do projeto"', () => {
        renderComments('Gostei do projeto')
        expect(screen.getByText('Gostei do projeto')).toBeInTheDocument();
    });
});