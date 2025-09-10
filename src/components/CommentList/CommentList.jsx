export const CommentList = ({ listaComentarios }) => (
    <div className="CommentList">
   {listaComentarios.map(comment => (<CommentInfo key={comment.id} listaComents={comment} />))}.
    </div>
);
