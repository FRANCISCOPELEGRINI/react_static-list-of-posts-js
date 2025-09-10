import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ listaComentarios }) => (
  <div className="CommentList">
    {listaComentarios.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
