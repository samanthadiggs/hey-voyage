
const UniqueInviteLink = ({inviteLink, setInviteLink, copied, setCopied}) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(inviteLink).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
        });
      };

    return (
        <div>
            <p>Unique Invite Link</p>
            <span className="text-truncate">{inviteLink}</span>
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={copyToClipboard}>Copy</button>
            {copied && <small className="text-success mt-2">Copied to clipboard!</small>}

        </div>
    );
};

export default UniqueInviteLink;