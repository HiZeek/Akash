import { useParams } from "react-router-dom";
import { photographyCategory } from "../../utils/photography";

const Category = () => {
  const { photographyId } = useParams();
  return (
    <div className="space-y-10">
      {photographyCategory.map((item) =>
        item.img.map(
          (img, i) =>
            photographyId === item.photographId && (
              <img
                src={img.src}
                alt={item.cat}
                key={i}
                className="rounded-[28px]"
              />
            )
        )
      )}
    </div>
  );
};

export default Category;
