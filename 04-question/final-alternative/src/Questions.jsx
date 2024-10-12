import SingleQuestion from "./SingleQuestion"

const Questions = ({ questions, isShow, toggleQues }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            isShow={isShow}
            toggleQues={toggleQues}
            {...question}
          ></SingleQuestion>
        )
      })}
    </section>
  )
}
export default Questions
