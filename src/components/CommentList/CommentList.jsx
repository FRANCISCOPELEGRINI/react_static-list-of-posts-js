export const CommentList = ({ listaComentarios }) => (
    <div className="CommentList">
    {listaComentarios.map ((a) => (
     <CommentInfo listaComents={listaComentarios}/>
    ))}
    </div>
);
