"use client"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({
    percentage,
    name
}: 
{
    percentage: number,
    name: string
}) => {
  return (
    <CircularProgressbar 
        styles={buildStyles({
            textSize: "12px",
            textColor: "#fffbeb",
            pathColor: "#fffbeb",
            trailColor: "#9e9e9e"
        })}
        className='w-32 h-32' 
        value={percentage} 
        text={name} />
  )
}

export default ProgressCircle