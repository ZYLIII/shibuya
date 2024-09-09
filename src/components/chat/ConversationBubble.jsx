export default function ConversationBubble({role, content}) {
    return (
        <div className={`bubble ${role}`}>
            { content }
        </div>
    )
}