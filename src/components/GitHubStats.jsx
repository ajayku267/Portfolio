import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const GITHUB_USERNAME = 'ajayku267';

const GitHubStats = () => (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Open Source Activity</p>
            <h2 className={styles.sectionHeadText}>GitHub Stats.</h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-6 justify-center">
            <img
                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=151030&title_color=915eff&icon_color=00cea8&text_color=aaa6c3`}
                alt="GitHub Stats"
                className="rounded-2xl h-auto max-w-full sm:max-w-[400px]"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
            />
            <img
                src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=151030&title_color=915eff&text_color=aaa6c3`}
                alt="Top Languages"
                className="rounded-2xl h-auto max-w-full sm:max-w-[340px]"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
            />
        </div>
    </>
);

export default SectionWrapper(GitHubStats, 'github');
