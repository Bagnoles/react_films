import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            page: 1,
        }
    }
    componentDidMount() {
        for (let i = 1; i <= this.props.pages; i++) {
            this.setState(prevState => ({
                pages: [...prevState.pages, i],
            }))
        }
    }

    render() {
        return (
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">&lt;</i></a></li>

                {this.state.pages.map((item) => (
                    <li className="waves-effect"><a href="#!">{item}</a></li>
                ))}

                <li className="waves-effect"><a href="#!"><i className="material-icons">&gt;</i></a></li>
            </ul>
        )
    }
}

export default Pagination;