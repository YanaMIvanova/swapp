import React from 'react'
import { string, number } from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Cell } from 'recharts'

export default function Chart(props) {
    const fieldMap = {
        cost: 'Cost',
        crew: 'Crew',
        speed: 'Max Atm. Speed',
        rating: 'HyperD Rat.',
        mlh: 'Max ML/h',
    }

    const data = [
        { subject: 'Max Atm. Speed', A: 1150, domain: [0, 1150], fullMark: 1150 },
        { subject: 'Max ML/h', A: 980, domain: [0, 980], fullMark: 980 },
        { subject: 'HyperD Rat.', A: 1, domain: [0, 1], fullMark: 1 },
        { subject: 'Crew', A: 1, domain: [0, 1], fullMark: 1 },
        { subject: 'Cost', A: 180000, domain: [0, 180000], fullMark: 180000 },
    ]

    const { starshipClass } = props

    return (
        <RadarChart outerRadius={150} width={500} height={500} data={data}>
            <Tooltip formatter={value => [value]} />
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} tick={false} />
            <Radar name={starshipClass} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5}>
                {data.map((entry, index) => (
                    <Cell domain={[0, entry.fullMark]} key={`cell-${index}`} />
                ))}
            </Radar>
        </RadarChart>
    )
}

Chart.propTypes = {
    starshipClass: string,
    cost: number,
    crew: number,
    speed: number,
    rating: number,
}
