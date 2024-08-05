import React, { Component } from 'react'

export default class Calendar extends Component{//สืบทอดตรงๆ
    getData(){
        const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const monthNames =['January','February','March','April','May','June','July','August',
            'September','October','November','December']
        const date =new Date()
        const weekDay = dayNames[date.getDay()]//ระบุindex
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        return `${weekDay} ${day} ${month} ${year}` //alt+96 เพราะเอาตัวแปรมาแทรก
    }
    render(){
        return <div>{this.getData()}</div>
    }

}