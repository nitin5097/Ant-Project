import React from 'react';
import {Card} from "antd";
import classnames from "classnames";
import "./home.scss";
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

interface HomeProps {
    message: string,
    name: string,
    isLoggedIn: boolean
}

let homeData = {
    "quiz": {
        "questions": [{
            "question": "Which one is correct team name in NBA?",
            "options": [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            "answer": "Huston Rocket"
        }, {
            "question": "5 + 7 = ?",
            "options": [
                "10",
                "11",
                "12",
                "13"
            ],
            "answer": "12"
        }, {
            "question": "12 - 8 = ?",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": "4"
        }],
    }
}

function Home(props: HomeProps) {
    return (
        <div>
            {props.isLoggedIn && <div className="home">
                <div>{props.name}, {props.message}</div>
            </div>}
            {homeData.quiz.questions.map(question => {
                return <Card key={question.question} size="small" title={question.question} style={{width: 300}}>
                    <Select defaultValue={question.options[0]} style={{ width: 120 }} onChange={handleChange}>
                        {question.options.map(answer => {
                            return <Option key={answer} value={answer}>{answer}</Option>
                            // return <p className={classnames({
                            //     "correct-answer": question.answer === answer
                            // })}>
                            //     {answer}
                            //     {question.answer === answer && <span>✓</span>}
                            // </p>
                        })}
                    </Select>

                </Card>
            })}

        </div>
    );
}

export default Home;
