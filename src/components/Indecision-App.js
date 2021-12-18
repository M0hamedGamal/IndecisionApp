import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./Add-Option";
import ModalOption from "./Modal-Option";

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined,
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options)
                this.setState(() => ({options}))
        } catch (e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleDeleteOptions = () => (this.setState(() => ({options: []})))

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {

            return {
                options: prevState.options.filter(option => (optionToRemove !== option))
            }
        })
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Please, enter a new option!";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This is an old option!";
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    };

    handelClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined,}))

    }

    render() {
        const subTitle = "Put your life in the hands of a computer.";
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options options={this.state.options}
                             handleDeleteOptions={this.handleDeleteOptions}
                             handleDeleteOption={this.handleDeleteOption}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <ModalOption selectedOption={this.state.selectedOption}
                             handelClearSelectedOption={this.handelClearSelectedOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}