import HeroBanner from '@pages/HomePage/HeroSection/HeroSection'
import FeaturesSection from '@pages/HomePage/FeaturesSection/FeaturesSection'
import CommunitySection from '@pages/HomePage/CommunitySection/CommunitySection'
import DeliverableSection from '@pages/HomePage/DeliverableSection/DeliverableSection'
import CourseSection from '@pages/HomePage/CourseSection/CourseSection'
import RoadmapSection from '@pages/HomePage/RoadmapSection/RoadmapSection'
import LearningSection from '@pages/HomePage/LearningSection/LearningSection'
import FaqSection from '@pages/HomePage/FaqSection/FaqSection'


const HomePage = () => {

    return (
        <main>
            <HeroBanner />
            <FeaturesSection />
            <CommunitySection />
            <DeliverableSection />
            <CourseSection />
            <RoadmapSection />
            <LearningSection />
            <FaqSection />
        </main>
    )
}

export default HomePage