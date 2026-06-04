import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CourseCard from './CourseCard'

function CourseSlider({ actionLabel, courseStats, courses }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={18}
      slidesPerView={1}
      breakpoints={{
        720: { slidesPerView: 2 },
        1040: { slidesPerView: 3 },
      }}
    >
      {courses.map((course) => (
        <SwiperSlide key={course.slug}>
          <CourseCard actionLabel={actionLabel} course={course} stats={courseStats?.[course.slug]} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CourseSlider
