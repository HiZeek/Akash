import { useParams } from "react-router-dom";
import { photographyCategory } from "../../utils/photography";

const CategoryPictures = () => {
  const { photographyId } = useParams();
  return (
    <>
      <div className="space-y-10">
        {photographyCategory.map((item) =>
          item.img.map(
            (img, i) =>
              photographyId === item.photographId.toLowerCase() && (
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
      <div className="py-10 hidden">
        {photographyCategory.map(
          (item, i) =>
            photographyId === item.photographId.toLowerCase() && (
              <div key={i}>
                <h2 className="text-center font-normal text-[28px] mb-[26px]">
                  {item.cat}
                </h2>
                <hr className="border border-primaryBlack" />
              </div>
            )
        )}
      </div>
    </>
  );
};

export default CategoryPictures;
