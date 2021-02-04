module.exports = async(client, data) => {
    client.user.setActivity(`Bot pour justetheo`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/normalementtheo"
      });
}