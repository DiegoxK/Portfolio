import Icons from "../../Svg/Icons";

function SvgCard({ title, children, iconType }) {
  return (
    <div className="col ">
      <div className="d-flex align-items-start border border-3 py-2 px-4 border-dark">
        <div className="bg-dark d-flex align-items-start p-2 rounded-2 me-3 mt-1">
          <Icons icon="search" className="fill-white" />
        </div>
        <div>
          <h2>Featured title</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SvgCard;
