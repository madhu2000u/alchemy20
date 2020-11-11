import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage";
import styles from "../styles/Team.module.css";
import TeamPerson from "../components/Team Person/TeamPerson";
import { people } from "../data/People";

export default function Team({ team }) {
  return (
    <main className={styles.main}>
      <Subpage showNot={false} />
      <div className={styles.heading}>
        <p>Team</p>
      </div>
      <div className={styles.people}>
        <div className={styles.chairman}>
          {team[0].chairmen.map((peeps) => (
            <TeamPerson
              isHead={peeps.isHead}
              img={peeps.img}
              alt={peeps.alt}
              name={peeps.name}
              title={peeps.title}
              phno={peeps.phno}
            />
          ))}
        </div>
        <div className={styles.other_heads}>
          {team[1].heads.map((peeps) => (
            <TeamPerson
              isHead={peeps.isHead}
              img={peeps.img}
              alt={peeps.alt}
              name={peeps.name}
              title={peeps.title}
              phno={peeps.phno}
            />
          ))}
        </div>
        <div className={styles.content_and_publicity}>
          <div className={styles.team_container}>
            <p>CONTENT</p>
            <div className={styles.team}>
              {team[2].contents.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
          <div className={styles.team_container}>
            <p>PUBLICITY</p>
            <div className={styles.team}>
              {team[3].publicitys.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.team_container}>
          <p>ORGANIZING COMMITTEE</p>
          <div className={styles.oc_team}>
            {team[4].ocs.map((peeps) => (
              <TeamPerson
                isHead={peeps.isHead}
                img={peeps.img}
                alt={peeps.alt}
                name={peeps.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.web_pr_des}>
          <div className={styles.team_container}>
            <p>WEB OPS</p>
            <div className={styles.team}>
              {team[5].webops.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
          <div className={styles.team_container}>
            <p>PR AND HOSPITALITY</p>
            <div className={styles.team}>
              {team[6].prh.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
          <div className={styles.team_container}>
            <p>DESIGN</p>
            <div className={styles.team}>
              {team[7].designs.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.market_gl}>
          <div className={styles.team_container}>
            <p>MARKETING</p>
            <div className={styles.mar_gl_team}>
              {team[8].markets.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
          <div className={styles.team_container}>
            <p>GUEST LECTURES</p>
            <div className={styles.mar_gl_team}>
              {team[9].gls.map((peeps) => (
                <TeamPerson
                  isHead={peeps.isHead}
                  img={peeps.img}
                  alt={peeps.alt}
                  name={peeps.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.team_container}>
          <p>EVENTS</p>
          <div className={styles.team}>
            {team[10].events.map((peeps) => (
              <TeamPerson
                isHead={peeps.isHead}
                img={peeps.img}
                alt={peeps.alt}
                name={peeps.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.team_container}>
          <p>WORKSHOPS</p>
          <div className={styles.team}>
            {team[11].workshops.map((peeps) => (
              <TeamPerson
                isHead={peeps.isHead}
                img={peeps.img}
                alt={peeps.alt}
                name={peeps.name}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

Team.Layout = Common;

export async function getStaticProps() {
  const team = people;
  return {
    props: {
      team,
    },
  };
}
