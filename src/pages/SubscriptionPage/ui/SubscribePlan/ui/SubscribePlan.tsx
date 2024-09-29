import * as classes from "./classes.module.scss";

const SubscribePlan = () => {
  return (
    <section className={classes.container}>
      <div className={classes.box}>
        <h2>Compare our plans and find the right one for you</h2>
        <p>
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>

      <div className={classes.table}>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>
                Standard <span>Popular</span>
              </th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.td}>Price</td>
              <td className={classes.td}>$9.99/Month</td>
              <td className={classes.td}>$12.99/Month</td>
              <td className={classes.td}>$14.99/Month</td>
            </tr>
            <tr>
              <td className={classes.text}>Content</td>
              <td className={classes.text}>
                Access to a wide selection of movies and shows, including some
                new releases.
              </td>
              <td className={classes.text}>
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </td>
              <td className={classes.text}>
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </td>
            </tr>

            <tr>
              <td className={classes.td}>Devices</td>
              <td className={classes.td}>Watch on one device simultaneously</td>
              <td className={classes.td}>Watch on Two device simultaneously</td>
              <td className={classes.td}>
                Watch on Four device simultaneously
              </td>
            </tr>

            <tr>
              <td className={classes.td}>Cancel Anytime</td>
              <td className={classes.td}>Yes</td>
              <td className={classes.td}>Yes</td>
              <td className={classes.td}>Yes</td>
            </tr>

            <tr>
              <td className={classes.td}>HDR</td>
              <td className={classes.td}>No</td>
              <td className={classes.td}>Yes</td>
              <td className={classes.td}>Yes</td>
            </tr>

            <tr>
              <td className={classes.td}>Dolby Atmos</td>
              <td className={classes.td}>No</td>
              <td className={classes.td}>Yes</td>
              <td className={classes.td}>Yes</td>
            </tr>

            <tr>
              <td className={classes.td}>Ad - Free</td>
              <td className={classes.td}>No</td>
              <td className={classes.td}>Yes</td>
              <td className={classes.td}>Yes</td>
            </tr>

            <tr>
              <td className={classes.td}>Offline Viewing</td>
              <td className={classes.td}>No</td>
              <td className={classes.td}>Yes, for select titles.</td>
              <td className={classes.td}>Yes, for all titles.</td>
            </tr>

            <tr>
              <td className={classes.td}>Family Sharing</td>
              <td className={classes.td}>No</td>
              <td className={classes.td}>Yes, up to 5 family members.</td>
              <td className={classes.td}>Yes, up to 6 family members.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SubscribePlan;
