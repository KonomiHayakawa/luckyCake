import React from 'react'
import classes from './PopUpDecoration.module.css'

const PopUpDecoration = () => {
  return (
    <>
      <div className={classes.circle1}>
        <svg width="235" height="236" viewBox="0 0 335 336" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M334.025 167.989C334.025 260.227 259.251 335.001 167.013 335.001C74.7741 335.001 0 260.227 0 167.989C0 75.7501 74.7741 0.976013 167.013 0.976013C259.251 0.976013 334.025 75.7501 334.025 167.989ZM32.9937 167.989C32.9937 242.005 92.996 302.007 167.013 302.007C241.029 302.007 301.031 242.005 301.031 167.989C301.031 93.972 241.029 33.9697 167.013 33.9697C92.996 33.9697 32.9937 93.972 32.9937 167.989Z" fill="#DBA7B3"/>
        </svg>
      </div>

      <div className={classes.circle2}>
        <svg width="157" height="222" viewBox="0 0 167 332" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M166.057 0.521851C144.301 0.521851 122.759 4.80701 102.659 13.1326C82.5588 21.4583 64.2957 33.6613 48.9119 49.0451C33.5281 64.4288 21.3251 82.692 12.9995 102.792C4.67383 122.892 0.388672 144.435 0.388672 166.19C0.388672 187.946 4.67383 209.489 12.9995 229.589C21.3251 249.689 33.5281 267.952 48.9119 283.336C64.2957 298.72 82.5588 310.923 102.659 319.248C122.759 327.574 144.301 331.859 166.057 331.859L166.057 166.19V0.521851Z" fill="#DBA7B3"/>
        </svg>
      </div>

      <div className={classes.circle3}>
        <svg width="119" height="118" viewBox="0 0 159 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.75" cx="79.1419" cy="79.0166" r="76.8679" stroke="#FBF2F2" stroke-width="4"/>
        </svg>
      </div>

      <div className={classes.circle4}>
        <svg width="109" height="108" viewBox="0 0 159 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.75" cx="79.1419" cy="79.0166" r="76.8679" stroke="#FBF2F2" stroke-width="4"/>
        </svg>
      </div>
    </>
  )
}

export default PopUpDecoration