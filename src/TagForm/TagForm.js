import React from "react";
const TagForm = ({ findChampions, resetResultState }) => {
    const possibleTags = ["Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"];
    const tagButtons = possibleTags.map(tag => {
        return (
            <button className="possible-champions" key={tag} name={tag} onClick={e => findChampions(e)}>
                {tag}
            </button>
        )
    });

    return (
        <>
            <h1 className="welcome-message">League Helper   </h1>
            <h2>
                {tagButtons}
            </h2>
            <button onClick={() => resetResultState()}>Reset the filter?</button>
        </>
    )
}
export default TagForm

