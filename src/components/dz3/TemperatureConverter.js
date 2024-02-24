// Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
import React, { useState } from 'react';
import TextField from "@mui/material/TextField";


function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (value) => {
        const converted = (value * 9 / 5) + 32;
        setFahrenheit(converted || '');
    };

    return (
        <div>
            <label>
                Celsius:
                <TextField
                    type="number"
                    value={celsius}
                    onChange={(e) => setCelsius(e.target.value)}

                    onBlur={(e) => handleCelsiusChange(e.target.value)}
                />
            </label>


            <label>
                Fahrenheit:
                <TextField
                    type="number"
                    value={fahrenheit}
                    onChange={(e) => setFahrenheit(e.target.value)}
                    onBlur={(e) => {
                        const converted = (e.target.value - 32) * 5 / 9;
                        setCelsius(converted || '');
                    }}
                />
            </label>

        </div>
    );
}

export default TemperatureConverter;