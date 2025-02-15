const { PixaldrainDL } = require("pixaldrain-sinhalasub");

cmd({
    pattern: "sinhalasub1",
    desc: "Search for a movie and get details and download options.",
    alias: ["sinhalasubdl"],
    category: "movie",
    react: "🍿",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const input = q.trim();
        if (!input) return reply("Please provide a movie name to search.");
       
        const result = await SinhalaSub.get_list.by_search(input);
        if (!result.status || result.results.length === 0) return reply("No results found.");

        let message = "📺 Search Results for\n\n*🔢 Reply Below Number*\n\n";
        result.results.forEach((item, index) => {
            message += `${index + 1}. *${item.title}*\n🗓️Type : *${item.type}*\n📎 Link : ${item.link}\n\n`;
        });

        const sentMsg = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg' },
            caption: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐒𝐔𝐏𝐔𝐍 𝐌𝐃',
                    newsletterJid: "120363270086174844@newsletter",
                },
                externalAdReply: {
                    title: '𝐒𝐔𝐏𝐔𝐍 𝐌𝐃',
                    body: '',
                    mediaType: 1,
                    sourceUrl: "https://github.com/mrsupunfernando12/SUPUN-MD",
                    thumbnailUrl: 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });

       
        const messageListener = async (update) => {
            const message = update.messages[0];
            if (!message.message || !message.message.extendedTextMessage) return;

            const userReply = message.message.extendedTextMessage.text.trim();
            const selectedMovieIndex = parseInt(userReply) - 1;

            if (selectedMovieIndex < 0 || selectedMovieIndex >= result.results.length) {
                await conn.sendMessage(from, {
                    react: { text: '❌', key: mek.key }
                });
                return reply("Invalid selection. Please choose a valid number from the search results.");
            }

            const selectedMovie = result.results[selectedMovieIndex];
            const link = selectedMovie.link;

            
            const movieDetails = await SinhalaSub.movie(link);
            if (!movieDetails || !movieDetails.status || !movieDetails.result) {
                return reply("Movie details not found or invalid link provided.");
            }

            const movie = movieDetails.result;
            let movieMessage = `☘️ *${movie.title}*\n\n`;
            movieMessage += `*🧿 Release Date:* ${movie.release_date}\n\n`;
            movieMessage += `*🌍 Country:* ${movie.country}\n\n`;
            movieMessage += `*⏱️ Duration:* ${movie.duration}\n\n`;
            movieMessage += `*🎀 Categories:* ${movie.genres}\n\n`;
            movieMessage += `*⭐ IMDB:* ${movie.IMDb_Rating}\n\n`;
            movieMessage += `*🤵‍♂️ Director:* ${movie.director.name}\n\n`;
            movieMessage += `*🔢 Reply Below Number*\n\n`;
            movieMessage += `1 | 480p\n`;
            movieMessage += `2 | 720p\n`;
            movieMessage += `3 | 1080p\n\n`;
            movieMessage += `> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ`;

            const imageUrl = movie.images && movie.images.length > 0 ? movie.images[0] : '';

           
            const movieDetailsMessage = await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: movieMessage
            });

            
            conn.ev.off("messages.upsert", messageListener);

           
            const qualityListener = async (update) => {
                const message = update.messages[0];
                if (!message.message || !message.message.extendedTextMessage) return;

                const userReply = message.message.extendedTextMessage.text.trim();

                if (message.message.extendedTextMessage.contextInfo.stanzaId === movieDetailsMessage.key.id) {
                    let quality;
                    if (userReply === '1') quality = "SD 480p";
                    else if (userReply === '2') quality = "HD 720p";
                    else if (userReply === '3') quality = "FHD 1080p";
                    else {
                        await conn.sendMessage(from, {
                            react: { text: '❌', key: mek.key }
                        });
                        return reply("Invalid option. Please select from SD, HD, or FHD.");
                    }

                    try {
                     
                        const directLink = await PixaldrainDL(link, quality, "direct");
                        if (directLink) {
                const sentMsg = await conn.sendMessage(from, {
                                document: { url: directLink },
                                mimetype: 'video/mp4',
                                fileName: `🍿ꜱᴜᴘᴜɴ ᴍᴅ ᴍᴏᴠɪᴇ ᴜᴘʟᴏᴅᴇʀ.mp4`,
                                caption: `${movie.title}\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ`,
                 contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐒𝐔𝐏𝐔𝐍 𝐌𝐃',
                    newsletterJid: "120363270086174844@newsletter",
                },
                externalAdReply: {
                    title: '𝐒𝐔𝐏𝐔𝐍 𝐌𝐃',
                    body: '',
                    mediaType: 1,
                    sourceUrl: "https://github.com/mrsupunfernando12/SUPUN-MD",
                    thumbnailUrl: 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
       });
                           
                            await conn.sendMessage(from, {
                                react: { text: '✅', key: mek.key }
                            });
                        } else {
                            await conn.sendMessage(from, {
                                react: { text: '❌', key: mek.key }
                            });
                            return reply(`Could not find the ${quality} download link. Please try another quality.`);
                        }
                    } catch (err) {
                        console.error('Error in PixaldrainDL function:', err);
                        await conn.sendMessage(from, {
                            react: { text: '❌', key: mek.key }
                        });
                        return reply("An error occurred while processing your download request.");
                    }
                }
            };

           
            conn.ev.on("messages.upsert", qualityListener);

            
            setTimeout(() => {
                conn.ev.off("messages.upsert", qualityListener);
            }, 200000);
        };

        
        conn.ev.on("messages.upsert", messageListener);

        
        setTimeout(() => {
            conn.ev.off("messages.upsert", messageListener);
        }, 200000);

    } catch (error) {
        console.error('Error in movie search or details:', error);
        await conn.sendMessage(from, {
            react: { text: '❌', key: mek.key }
        });
        reply("An error occurred while fetching the movie search or details.");
    }
});
