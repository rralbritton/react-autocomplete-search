import React from 'react'
import "./AutoComplete.css";

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
            text: ""
        }
    }

    onTextChange = e => {
        const { items } = this.props
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }

        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected = (value) => {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions = () => {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul >
                {suggestions.map(item => (
                    <li onClick={() => this.suggestionSelected(item)}>{item}</li>
                ))}
            </ul>
        )
    }

    render() {
        const { text } = this.state
        return (
            <div>
                <h1>Search with Suggestions</h1>
                <p><b>Names that you can search:</b> Rachel, Cori, Nate, Brenton, Lindsey.</p>
                <ul>
                    <li>This class expects to receive a prop called items.</li>
                    <li>Search is based on first letter in the name. Name can be lower or uppercase.</li>
                    <li>Suggestions can be clicked on to be completed.</li>
                    <li>A button can be added to this to cause a click event such as retrieving a specific record from a database/api call.</li>
                    <li>In this example I've just hard coded an array in this Home class.
                    In a real-world app, this hardcoded list would most likely be replaced by an array retieved
                    from an api in componentDidMount.</li>
                </ul>
                <div className="autocomplete">
                    <input value={text} onChange={this.onTextChange} type="text" />
                    {this.renderSuggestions()}
                </div>
            </div >
        )
    }
}
