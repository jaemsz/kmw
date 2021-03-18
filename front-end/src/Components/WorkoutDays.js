import WorkoutDay from './WorkoutDay'

const WorkoutDays = ({ days, onToggle }) => {
    return (
        <>
            {days.map((day) => {
                return <WorkoutDay key={day.id} day={day} onToggle={onToggle} />
            })}
        </>
    )
}

export default WorkoutDays
