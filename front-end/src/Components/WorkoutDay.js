const WorkoutDay = ({ day, onToggle }) => {
    const enable = {color: 'green'}
    const disable = {color: 'red'}

    return (
        <div className='task' onClick={() => onToggle(day.id)}>
            <h3 style={day.enroll ? enable : disable}>
                {day.name}
            </h3>
        </div>
    )
}

export default WorkoutDay
