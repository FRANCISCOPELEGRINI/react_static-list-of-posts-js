export const CommentInfo = ({ listaComents }) => (
    <>
    
          <div className="CommentInfo">
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">{listaComents.name}</strong>

              {' by '}

              <a
                className="CommentInfo__email"
                href={`mailto:${listaComents.email}`}
              >
                Telly_Lynch@karl.co.uk
              </a>
            </div>

            <div className="CommentInfo__body">
              {listaComents.body}
            </div>
          </div>
        
    </>
);


