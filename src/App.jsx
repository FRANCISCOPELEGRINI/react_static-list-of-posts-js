import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { CommentList } from './components/CommentList/CommentList';
const posts = postsFromServer.map(p => ({
...p,
user: usersFromServer.find(u => u.id === p.userId),
comments: commentsFromServer.filter(c => c.postId === p.id),
}));


export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={post}/>
    <CommentList listaComentarios={p}/>
  </section>
);


/*

React Static List of Posts (JS)
Esta tarefa é semelhante à Lista Estática de Tarefas, mas você deve fazer tudo sozinho:

Não altere as classes na marcação fornecida (os testes as utilizam);

prepare as postagens adicionando um usuário e comentários a cada postagem (cada comentário possui um postId);

divida o aplicativo em componentes com base nos blocos CSS fornecidos;

os estilos de App.scss também devem ser movidos para arquivos separados. Ex.: PostList.scss;

Os componentes de lista devem receber um array de objetos correspondentes e renderizar um componente de informação por objeto;

os componentes de informação devem receber um objeto e renderizar seus dados.

*/