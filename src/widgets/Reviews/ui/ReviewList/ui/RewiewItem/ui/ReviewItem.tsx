import { Rating } from "@mui/material";
import * as classes from "./classes.module.scss";

interface Props {
  author: string;
  description: string;
  type: string;
}

const ReviewItem = ({ author, type, description }: Props) => {
  return (
    <div className={classes.reviewsListContainer}>
      <div style={{ display: "flex", margin: "40px 40px 20px 40px" }}>
        <p className={classes.author}>{author}</p>
        {type ? (
          <Rating
            name="read-only"
            precision={0.5}
            value={type === "POSITIVE" ? 5 : type === "NEGATIVE" ? 0 : 2.5}
            readOnly
            style={{ marginLeft: "auto" }}
          />
        ) : (
          <p>"No rating"</p>
        )}
      </div>
      <p className={classes.textReview}>{description}</p>
    </div>
  );
};

export default ReviewItem;
