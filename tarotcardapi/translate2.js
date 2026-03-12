const fs = require('fs');
const path = './routes/cardRoutes.js';
let content = fs.readFileSync(path, 'utf8');

const translations = {
  "The Fool": {
    name: "Chàng Khờ (The Fool)",
    description: "Lá bài cho thấy các khoản đầu tư của bạn có tiềm năng mang lại kết quả tích cực. The Fool tượng trưng cho sự khởi đầu mới, dám chấp nhận rủi ro và đón nhận các phương pháp tiếp cận độc đáo. Nó khuyến khích bạn tin tưởng vào bản năng của mình và khám phá những cơ hội mới. Tuy nhiên, điều quan trọng là phải thận trọng và tránh liều lĩnh.\n\nThe Fool chỉ ra rằng thành công có thể đến thông qua ý thức phiêu lưu và học hỏi từ cả kết quả tích cực lẫn tiêu cực. Nhìn chung, lá bài ngụ ý rằng các khoản đầu tư của bạn có triển vọng đầy hứa hẹn, nhưng kết quả cuối cùng sẽ phụ thuộc vào sự sẵn sàng của bạn để nắm bắt hành trình và đưa ra các quyết định sáng suốt."
  },
  "The Magician": {
    name: "Pháp Sư (The Magician)",
    description: "Lá bài cho thấy các giao dịch của bạn có tiềm năng mang lại kết quả thành công. The Magician đại diện cho sức mạnh, kỹ năng và khả năng hiện thực hóa mục tiêu. Nó biểu thị rằng bạn có các công cụ và khả năng cần thiết để làm cho các khoản đầu tư của mình sinh lời. Lá bài này khuyến khích bạn sử dụng trí tuệ, sự sáng tạo và sự tháo vát của mình để tạo lợi thế.\n\nBằng cách khai thác tiềm năng của mình và đưa ra các quyết định chiến lược, bạn có thể thể hiện những kết quả tích cực trong các giao dịch tiền điện tử của mình. Tuy nhiên, điều quan trọng cần nhớ là kết quả cuối cùng sẽ phụ thuộc vào hành động, lựa chọn và điều kiện thị trường của bạn."
  },
  "The High Priestess": {
    name: "Nữ Tư Tế (The High Priestess)",
    description: "Theo lá Nữ Tư Tế, các giao dịch của bạn có tiềm năng mang lại những kết quả bí ẩn và trực quan. Hãy tin vào bản năng của bạn, khai thác kiến thức tiềm ẩn và khám phá các quan điểm thay thế để đưa ra các quyết định sáng suốt. Lá bài gợi ý rằng các yếu tố vô hình có thể ảnh hưởng đến các khoản đầu tư của bạn, và việc nắm bắt trực giác của bạn có thể dẫn đến những kết quả sinh lời.\n\nTuy nhiên, hãy nhớ rằng lá High Priestess không đảm bảo kết quả cụ thể; sự thành công phụ thuộc vào khả năng bạn điều hướng các bí ẩn của thị trường bằng cách sử dụng kết hợp phân tích lý trí và sự sáng suốt trực quan."
  },
  "The Empress": {
    name: "Nữ Hoàng (The Empress)",
    description: "Theo lá bài Tarot Nữ Hoàng, các giao dịch của bạn có tiềm năng mang lại kết quả dồi dào và nhiều quả ngọt. Nữ Hoàng đại diện cho sự phát triển, nuôi dưỡng và thịnh vượng. Lá bài này cho thấy các khoản đầu tư của bạn có thể mang lại kết quả tích cực và sự dư dả về tài chính.\n\nĐể đạt được thành công cao nhất, lá bài khuyên bạn nên áp dụng tư duy nuôi dưỡng và tiếp cận các giao dịch của mình với sự kiên nhẫn và cẩn thận."
  },
  "The Emperor": {
    name: "Hoàng Đế (The Emperor)",
    description: "Lá bài Tarot Hoàng Đế đại diện cho quyền lực, cấu trúc và sự ổn định. Nó biểu tượng cho khoảng thời gian nắm quyền kiểm soát và thiết lập một nền tảng vững chắc cho các giao dịch của bạn. Lá bài này gợi ý rằng các khoản đầu tư của bạn có tiềm năng mang lại kết quả tích cực thông qua cách tiếp cận có kỷ luật và có cấu trúc.\n\nBằng cách thiết lập ranh giới rõ ràng và duy trì cảm giác kiểm soát, bạn có thể tạo ra một khuôn khổ ổn định để thành công."
  },
  "The Hierophant": {
    name: "Giáo Hoàng (The Hierophant)",
    description: "Theo lá Giáo Hoàng, các giao dịch của bạn có tiềm năng mang lại kết quả theo cấu trúc và truyền thống. Giáo Hoàng đại diện cho sự tuân thủ, truyền thống và các hệ thống đã được thiết lập. Lá bài này gợi ý rằng các khoản đầu tư của bạn có thể được hưởng lợi từ việc tuân theo các hướng dẫn đã được thiết lập và áp dụng một cách tiếp cận thận trọng."
  },
  "The Lovers": {
    name: "Kẻ Đang Yêu (The Lovers)",
    description: "Theo lá Kẻ Đang Yêu, các giao dịch của bạn có khả năng tạo ra kết quả hài hòa và tích cực. The Lovers đại diện cho sự hợp tác, sự liên kết, và những lựa chọn dựa trên các giá trị cá nhân. Lá bài này gợi ý rằng các khoản đầu tư của bạn có thể phát triển mạnh mẽ khi bạn đưa ra những quyết định cộng hưởng với niềm tin của mình."
  },
  "The Chariot": {
    name: "Cỗ Xe Ngựa (The Chariot)",
    description: "Theo lá Cỗ Xe Ngựa, các giao dịch của bạn có khả năng mang lại chiến thắng và thành công. The Chariot đại diện cho lòng quyết tâm, ý chí, và sự quyết đoán. Nó cho thấy rằng thông qua nỗ lực tập trung và có kỷ luật, bạn có thể vượt qua các thách thức và trở ngại trên thị trường."
  },
  "Strength": {
    name: "Sức Mạnh (Strength)",
    description: "Theo lá Sức Mạnh, các giao dịch của bạn có tiềm năng mang lại sức mạnh và khả năng phục hồi. Lá bài Sức Mạnh đại diện cho lòng can đảm, sức mạnh nội tâm và khả năng vượt qua thử thách. Nó khuyên bạn hãy tin tưởng vào khả năng của mình, giữ bình tĩnh trong những thời khắc hỗn loạn và kiên trì theo đuổi các mục tiêu đầu tư."
  },
  "The Hermit": {
    name: "Ẩn Sĩ (The Hermit)",
    description: "Theo lá Ẩn Sĩ, các giao dịch của bạn có thể mang lại sự tự suy ngẫm và sự tĩnh lặng. Ẩn Sĩ đại diện cho sự khôn ngoan, tự xem xét, và tìm kiếm sự hướng dẫn từ bên trong. Lá bài này gợi ý rằng các khoản đầu tư của bạn có thể hưởng lợi từ việc lùi lại một bước, suy ngẫm về chiến lược của bạn, và tìm kiếm sự hiểu biết sâu sắc hơn về thị trường."
  },
  "Wheel of Fortune": {
    name: "Bánh Xe Số Phận (Wheel of Fortune)",
    description: "Theo lá Bánh Xe Số Phận, các giao dịch của bạn có thể mang những kết quả khó đoán. Wheel of Fortune đại diện cho các chu kỳ và sự thay đổi trong cuộc sống, chỉ ra rằng các khoản đầu tư của bạn có thể chịu tác động của những thăng trầm. Lá bài khuyên bạn nên nắm bắt cả cơ hội và thách thức khi vận may và hoàn cảnh đóng một vai trò quan trọng trong kết quả giao dịch của bạn."
  },
  "Justice": {
    name: "Công Lý (Justice)",
    description: "Theo lá bài Tarot Công Lý, các giao dịch của bạn có thể đem lại kết quả công bằng và cân bằng. Lá bài Công Lý đại diện cho sự công bằng, sự thật và tính trách nhiệm. Nó gợi ý rằng các khoản đầu tư của bạn sẽ chịu ảnh hưởng bởi nguyên lý nhân quả. Hãy hành động với sự liêm chính."
  },
  "The Hanged Man": {
    name: "Người Treo Ngược (The Hanged Man)",
    description: "Theo lá Người Treo Ngược, các giao dịch của bạn có thể trải qua một giai đoạn đình trệ, hy sinh và có được một góc nhìn mới. The Hanged Man đại diện cho một thời gian tạm dừng và buông xuôi, khuyến khích bạn buông bỏ các chiến lược cũ kỹ không còn tác dụng để có cái nhìn đột phá."
  },
  "Death": {
    name: "Cái Chết (Death)",
    description: "Theo lá bài Tarot Cái Chết, các giao dịch của bạn có thể trải qua sự biến đổi, những kết thúc và sự khởi đầu mới. Lá bài Death đại diện cho sự thay đổi đáng kể và việc buông bỏ cái cũ. Nó khuyên bạn nên từ bỏ sự bám chấp vào các chiến lược lỗi thời để dọn đường cho những cơ hội mới."
  },
  "Temperance": {
    name: "Tiết Chế (Temperance)",
    description: "Theo lá Tiết Chế, các giao dịch của bạn có thể mang lại sự cân bằng, chừng mực và hài hòa. Lá bài Temperance đại diện cho việc tìm ra con đường trung đạo và kết hợp các yếu tố khác nhau với nhau. Nó khuyên bạn nên tìm kiếm một cách tiếp cận cân bằng giữa rủi ro và thận trọng."
  },
  "The Devil": {
    name: "Ác Quỷ (The Devil)",
    description: "Theo lá bài Tarot Ác Quỷ, các giao dịch của bạn có thể dẫn đến sự sập bẫy, ảo tưởng và kết quả tiêu cực. The Devil đại diện cho sự cám dỗ, chủ nghĩa vật chất, và việc bị ràng buộc bởi các khuôn mẫu hoặc sự phụ thuộc độc hại. Cảnh báo việc đưa ra những quyết định cảm tính, lòng tham hoặc theo tâm lý bầy đàn."
  },
  "The Tower": {
    name: "Tòa Tháp (The Tower)",
    description: "Theo lá Tòa Tháp, các giao dịch của bạn có thể mang lại những kết quả bất ngờ và mang tính phá vỡ. The Tower đại diện cho sự thay đổi đột ngột, những cuộc biến động, và sự sụp đổ của các cấu trúc hiện tại. Hãy chuẩn bị tinh thần cho những sự kiện bất ngờ có thể làm lung lay nền tảng các giao dịch của bạn."
  },
  "The Star": {
    name: "Ngôi Sao (The Star)",
    description: "Theo lá bài Tòa Ngôi Sao, các giao dịch của bạn có thể đem lại hy vọng, nguồn cảm hứng, và những kết quả tích cực. The Star đại diện cho ánh sáng dẫn đường, mang lại sự lạc quan và đổi mới. Nó biểu thị rằng các nỗ lực của bạn có tiềm năng mang lại những thay đổi tích cực và hoàn thành những ước mơ của bạn."
  },
  "The Moon": {
    name: "Mặt Trăng (The Moon)",
    description: "Theo lá bài Tarot Mặt Trăng, kết quả các giao dịch của bạn có thể bị ảnh hưởng bởi trực giác, cảm xúc và tiềm thức. The Moon đại diện cho cõi không tên, những ảo ảnh và các yếu tố che khuất. Khuyên bạn nên tin vào bản năng của mình, nhưng phải cẩn thận với thông tin lừa đảo."
  },
  "The Sun": {
    name: "Mặt Trời (The Sun)",
    description: "Theo lá bài Tarot Mặt Trời, các giao dịch của bạn có khả năng cao sẽ gặt hái thành công, sự tích cực và sự sung túc. The Sun đại diện cho niềm vui, sức sống và các kết quả vô cùng thuận lợi. Nó đánh dấu một giai đoạn thăng hoa và nở rộ trong các khoản đầu tư của bạn."
  },
  "Judgement": {
    name: "Phán Xét (Judgement)",
    description: "Theo lá Phán Xét, các giao dịch của bạn có thể trải qua một giai đoạn đánh giá đáng kể, tính trách nhiệm và khả năng tái sinh. Lá bài này là một lời kêu gọi bạn hãy xem xét lại những lựa chọn và hành động đã qua trong quá khứ, đánh giá sai lầm để bắt đầu một chặng đường tươi mới."
  },
  "The World": {
    name: "Thế Giới (The World)",
    description: "Theo lá Thế Giới, các giao dịch của bạn chắc chắn sẽ gặt hái được kết quả thành công rực rỡ và trọn vẹn. The World đại diện cho sự hoàn tất, thành tựu và sự toàn vẹn. Nó biểu thị rằng các khoản đầu tư của bạn đã đến đích của một hành trình chu kỳ và chuẩn bị bước vào giai đoạn tận hưởng chiến thắng."
  },
  "Ace of Cups": {
    name: "Ace of Cups (1 Cốc)",
    description: "Các giao dịch của bạn có thể mang tới những cơ hội mới và sự trọn vẹn về cảm xúc. Nó hứa hẹn một sự khởi đầu tích cực với nguồn sinh lực dồi dào, đem lại cả niềm vui và tài chính."
  },
  "Two of Cups": {
    name: "Two of Cups (2 Cốc)",
    description: "Đại diện cho các mối quan hệ đối tác, sự kết nối và những lợi ích thiết thực song phương. Lời khuyên là tìm kiếm sự hợp tác bền vững để làm ăn và gặt hái kết quả hài hòa."
  },
  "Three of Cups": {
    name: "Three of Cups (3 Cốc)",
    description: "Đại diện cho sự ăn mừng, tình bạn và sự dồi dào. Đầu tư có tiềm năng mang lại sự đồng thuận, thành công được sẻ chia cho nhiều người."
  },
  "Four of Cups": {
    name: "Four of Cups (4 Cốc)",
    description: "Biểu hiện một thời kỳ trầm ngâm, một cảm giác không hài lòng hay chán nản với các cơ hội hiện có. Khuyên bạn hãy lùi lại một bước và đánh giá kỹ các kỳ vọng của bản thân."
  },
  "Five of Cups": {
    name: "Five of Cups (5 Cốc)",
    description: "Đại diện cho sự thất vọng hay chú tâm vào những thất bại, mất mát trong quá khứ. Tuy nhiên, nó cũng mang thông điệp của sự học hỏi và phục hồi."
  },
  "Six of Cups": {
    name: "Six of Cups (6 Cốc)",
    description: "Gợi ý về cảm giác hoài niệm và các yếu tố ảnh hưởng từ quá khứ. Bạn có thể sử dụng các kinh nghiệm, bài học cũ để dẫn lối cho các quyết định hiện tại."
  },
  "Seven of Cups": {
    name: "Seven of Cups (7 Cốc)",
    description: "Đại diện cho sự bối rối vì có quá nhiều lựa chọn hoặc các hứa hẹn xa vời. Cảnh báo việc bạn bị mờ mắt trước lợi ích không thật, cần sự phân định rõ ràng."
  },
  "Eight of Cups": {
    name: "Eight of Cups (8 Cốc)",
    description: "Biểu thị sự rời đi; bạn có khuynh hướng từ bỏ rũ bỏ những đầu tư không còn sinh lợi hoặc không phù hợp với mục tiêu sâu thẳm của mình."
  },
  "Nine of Cups": {
    name: "Nine of Cups (9 Cốc)",
    description: "Tiềm năng mang tới cho bạn sự mãn nguyện, hài lòng và dồi dào. Đại diện cho 'ước mơ thành hiện thực', các kết quả tích cực ngoài mong đợi."
  },
  "Ten of Cups": {
    name: "Ten of Cups (10 Cốc)",
    description: "Đại diện cho hạnh phúc đong đầy, hài hòa gia đạo, viên mãn trọn vẹn, không chỉ ở khía cạnh tiền bạc mà còn là niềm vui tận tâm can."
  },
  "Page of Cups": {
    name: "Page of Cups (Tiểu Đồng Cốc)",
    description: "Tràn đầy nhiệt huyết, ý tưởng mới mẻ và sự phát triển cảm xúc. Lời khuyên hãy giữ một trái tim rộng mở nếu muốn đầu tư sinh lợi bất ngờ."
  },
  "Knight of Cups": {
    name: "Knight of Cups (Hiệp Sĩ Cốc)",
    description: "Gợi ý việc nghe theo trực giác trong giao dịch nhưng cần giữ thăng bằng và thực tế tránh yếu tố chủ quan và cảm xúc lấn át lý trí."
  },
  "Queen of Cups": {
    name: "Queen of Cups (Nữ Hoàng Cốc)",
    description: "Trí tuệ cảm xúc, thấu cảm và sự khôn ngoan của trực giác. Đưa ra các quyết định sáng suốt từ một tư duy cân bằng."
  },
  "King of Cups": {
    name: "King of Cups (Vua Cốc)",
    description: "Sự bình ổn và bình tĩnh trước sóng gió thị trường. Thành công đến từ việc nắm vững tâm lý và kiểm soát cảm xúc tốt."
  },
  "Ace of Pentacles": {
    name: "Ace of Pentacles (1 Tiền)",
    description: "Tiềm năng sinh lời cực cao, một khởi đầu mở ra sự thịnh vượng vật chất, của cải dồi dào. Hãy nắm bắt ngay các cơ hội chắc chắn."
  },
  "Two of Pentacles": {
    name: "Two of Pentacles (2 Tiền)",
    description: "Sự linh hoạt trong quản lý dòng tiền; bạn có thể đang tung hứng nhiều khoản cùng lúc, nhưng với kỹ năng thăng bằng thì mọi nguồn tài nguyên đều sẽ ổn."
  },
  "Three of Pentacles": {
    name: "Three of Pentacles (3 Tiền)",
    description: "Đại diện cho việc hợp tác kinh doanh, kỹ năng chuyên môn được đánh giá cao và sẽ có thành công vang dội khi kết nối làm ăn nhóm."
  },
  "Four of Pentacles": {
    name: "Four of Pentacles (4 Tiền)",
    description: "Cẩn trọng về tài chính, bạn có xu hướng giữ khư khư tiền, nhưng hãy cẩn thận kẻo quá phòng thủ sẽ mất đi cơ hội đầu tư sinh lời."
  },
  "Five of Pentacles": {
    name: "Five of Pentacles (5 Tiền)",
    description: "Báo động đỏ về thất thoát tài chính và khó khăn chật vật. Đừng ngần ngại tìm kiếm sự giúp đỡ bên ngoài thay vì chịu đựng sự hao hụt."
  },
  "Six of Pentacles": {
    name: "Six of Pentacles (6 Tiền)",
    description: "Đại diện cho sự trao đổi cân bằng, từ thiện và hào phóng. Bạn nhận lại tương xứng với những gì bỏ ra một cách minh bạch."
  },
  "Seven of Pentacles": {
    name: "Seven of Pentacles (7 Tiền)",
    description: "Sự kiên nhẫn và nuôi dưỡng mầm non. Bạn đang xem xét thành quả và chỉ cần đợi thời cơ chín muồi để gặt hái sau chuỗi ngày làm việc vất vả."
  },
  "Eight of Pentacles": {
    name: "Eight of Pentacles (8 Tiền)",
    description: "Nêu cao sự cống hiến, tập trung trau dồi chuyên môn, nỗ lực làm việc đều đặn sẽ mang lại các đồng lời vững chãi, từ từ nhưng chắc chắn."
  },
  "Nine of Pentacles": {
    name: "Nine of Pentacles (9 Tiền)",
    description: "Sự tự chủ và tận hưởng sự giàu có do chính đôi bàn tay mình làm ra. Sự độc lập tài chính bền vững."
  },
  "Ten of Pentacles": {
    name: "Ten of Pentacles (10 Tiền)",
    description: "Thành tựu tột bậc về sự trù phú vật chất, lợi ích dài hạn bền chắc, để lại nền móng tài sản vững chãi qua nhiều thế hệ."
  },
  "Page of Pentacles": {
    name: "Page of Pentacles (Tiểu Đồng Tiền)",
    description: "Những cơ hội tươi mới mang tính hệ thống; người mới vào thị trường với thái độ học hỏi cẩn trọng rất dễ đạt mục tiêu dòng tiền."
  },
  "Knight of Pentacles": {
    name: "Knight of Pentacles (Hiệp Sĩ Tiền)",
    description: "Sự tiến bộ chậm mà rất an toàn; cẩn thận soi xét đường đi nước bước để có lợi nhuận ổn định không rủi ro."
  },
  "Queen of Pentacles": {
    name: "Queen of Pentacles (Nữ Hoàng Tiền)",
    description: "Thực tế, bảo bọc, nuôi dưỡng thịnh vượng. Là nguồn lực dự phòng tốt tạo bàn đạp rất an tâm cho các quyết định đầu tư."
  },
  "King of Pentacles": {
    name: "King of Pentacles (Vua Tiền)",
    description: "Quyền lực đỉnh điểm trên phương diện tài chính, tài khéo léo bậc thầy trong quản lý rủi ro trên thị trường thực."
  },
  "Ace of Swords": {
    name: "Ace of Swords (1 Kiếm)",
    description: "Đại diện cho tính minh mẫn của trí tuệ, những rào cản sẽ bị phá tan bằng tư duy lập luận sắc bén nhất mang lại sự khai sáng và thắng lợi mới."
  },
  "Two of Swords": {
    name: "Two of Swords (2 Kiếm)",
    description: "Khựng lại giữa ranh giới bất phân thắng bại; xung đột thông tin khiến bạn khó đưa ra quyết định giao dịch."
  },
  "Three of Swords": {
    name: "Three of Swords (3 Kiếm)",
    description: "Nỗi đau khổ và những cú sốc thất vọng về đầu tư; hãy chấp nhận mất mát để tìm cách hồi phục và làm lại thay vì gục ngã."
  },
  "Four of Swords": {
    name: "Four of Swords (4 Kiếm)",
    description: "Thời gian nghỉ ngơi, ngừng mọi giao dịch một lúc để não bộ 'xả hơi' lấy lại cân bằng cho tâm trí đang kiệt quệ."
  },
  "Five of Swords": {
    name: "Five of Swords (5 Kiếm)",
    description: "Môi trường đầy cạnh tranh tiêu cực, lừa gạt hoặc hao tài khi tham gia vào các trận chiến mà lợi ích chung không hề đáng giá."
  },
  "Six of Swords": {
    name: "Six of Swords (6 Kiếm)",
    description: "Quá trình rời bỏ giông bão để đi tìm sự êm ả. Lịch trình sẽ tĩnh lặng và khả quan hơn cho tương lai khoản đầu tư."
  },
  "Seven of Swords": {
    name: "Seven of Swords (7 Kiếm)",
    description: "Cảnh báo gian lận, sự lừa dối ẩn giấu; đừng dính vào các phi vụ thiếu minh bạch và rủi ro trộm tiền cao."
  },
  "Eight of Swords": {
    name: "Eight of Swords (8 Kiếm)",
    description: "Tự rơi vào bế tắc bởi rào cản tư duy hạn hẹp của chính bản thân; tháo bỏ dải băng che mắt và nhìn mọi việc dưới góc độ cởi mở hơn sẽ tự giải quyết được."
  },
  "Nine of Swords": {
    name: "Nine of Swords (9 Kiếm)",
    description: "Mất ngủ, chịu bao dằn vặt, lo lắng vì sợ rủi ro; hãy bình tĩnh phân tích vì đôi phần lỗi là do tâm lý quá căng thẳng."
  },
  "Ten of Swords": {
    name: "Ten of Swords (10 Kiếm)",
    description: "Thất bại thảm hại, đã chạm đáy sự đau đớn khó lòng vãn hồi; tuy nhiên khi chạm đáy cũng chính là lúc chu kỳ mới sẽ bắt đầu mở ra."
  },
  "Page of Swords": {
    name: "Page of Swords (Tiểu Đồng Kiếm)",
    description: "Một trạng thái đầy học hỏi tò mò nhưng luôn theo dõi chặt chẽ thị trường. Cần cẩn trọng trong sự thích chứng tỏ năng lực."
  },
  "Knight of Swords": {
    name: "Knight of Swords (Hiệp Sĩ Kiếm)",
    description: "Người có tốc độ như vũ bão, lao vào các thử thách rủi ro cao một cách táo bạo, hãy làm chậm lại nếu không muốn ngã ngựa."
  },
  "Queen of Swords": {
    name: "Queen of Swords (Nữ Hoàng Kiếm)",
    description: "Suy luận tỉnh táo và không để cảm xúc chi phối; một đầu óc phân tích dữ liệu siêu việt dẫn tới các quyết sách đúng đắn vô cùng logic."
  },
  "King of Swords": {
    name: "King of Swords (Vua Kiếm)",
    description: "Người phán xét bậc thầy, năng lực tổng hợp và đánh giá thông tin vô cùng lý trí, là đỉnh cao của sự thông thái trong thương thuyết tài chính."
  },
  "Ace of Wands": {
    name: "Ace of Wands (1 Gậy)",
    description: "Nguồn năng lượng khởi phát lớn, sức sáng tạo và niềm đam mê cuộn dâng, rất tốt với các đợt phát kiến các dự án đầu tư mới mẻ."
  },
  "Two of Wands": {
    name: "Two of Wands (2 Gậy)",
    description: "Tầm nhìn xa trông rộng, một người đang lên chiến lược rõ ràng cho việc bành trướng quy mô đầu tư."
  },
  "Three of Wands": {
    name: "Three of Wands (3 Gậy)",
    description: "Sự mở rộng, tăng trưởng; chờ đợi con tàu chở hàng hóa lợi nhuận cập bến thành công tốt đẹp."
  },
  "Four of Wands": {
    name: "Four of Wands (4 Gậy)",
    description: "Nền tảng vững chắc, kỳ nghỉ hân hoan chúc mừng một cột mốc thắng lợi an ổn đạt được trong kinh doanh."
  },
  "Five of Wands": {
    name: "Five of Wands (5 Gậy)",
    description: "Sự đấu tranh, cạnh tranh thị trường gay gắt, nhiều rắc rối nhưng nếu nhìn tích cực sẽ tạo được động lực đổi mới."
  },
  "Six of Wands": {
    name: "Six of Wands (6 Gậy)",
    description: "Đỉnh vinh quang, bạn được tán dương và đứng trên bục chiến thắng, sự thành công đã được đại chúng ghi nhận."
  },
  "Seven of Wands": {
    name: "Seven of Wands (7 Gậy)",
    description: "Một mình chống lại dư luận, phải kiên quyết bảo vệ vị thế của mình trước các cuộc tấn công và vất vả đối mặt với phe đối lập."
  },
  "Eight of Wands": {
    name: "Eight of Wands (8 Gậy)",
    description: "Hành động nhanh gọn, tiến triển cực nhanh. Thông tin cập nhật từng giây từng phút mang tính sống còn đối với sự bắt nhịp thị trường."
  },
  "Nine of Wands": {
    name: "Nine of Wands (9 Gậy)",
    description: "Sự hao tổn sức lực, mỏi mệt nhưng vẫn quyết tâm ráng bảo vệ mọi thứ; một rào cản vững chắc ngăn sự thâm nhập của thất bại."
  },
  "Ten of Wands": {
    name: "Ten of Wands (10 Gậy)",
    description: "Ôm đồm quá mức tới độ kiệt quệ với gánh nặng công việc đầu tư. Khuyên nên biết san sẻ đi."
  },
  "Page of Wands": {
    name: "Page of Wands (Tiểu Đồng Gậy)",
    description: "Tràn trề ý tưởng táo bạo nhưng thiếu thực thi. Sẵn lòng khám phá ranh giới mới nhưng rất dễ bị quá tải hoặc nản sau giai đoạn hào hứng."
  },
  "Knight of Wands": {
    name: "Knight of Wands (Hiệp Sĩ Gậy)",
    description: "Táo bạo đầy lửa, một người thích hành động tức thời tiến công ngay lập tức theo phong cách ưa phiêu lưu liều lĩnh."
  },
  "Queen of Wands": {
    name: "Queen of Wands (Nữ Hoàng Gậy)",
    description: "Có khả năng truyền lửa, tự tin đầy cuốn hút và một tổ chức có tinh thần cực nhiệt huyết, mang năng lượng ấm áp."
  },
  "King of Wands": {
    name: "King of Wands (Vua Gậy)",
    description: "Khả năng lãnh đạo tầm nhìn, người kiến tạo đầy quyền lực, gặt hái thành công bằng sự tiên phong và lôi cuốn mọi người cùng đạt mục tiêu."
  }
};

let outputContent = content;
Object.keys(translations).forEach(englishName => {
  const blockRegex = new RegExp(`name:\\s*['"\`]${englishName}['"\`]\\s*,\\s*description:\\s*(['"\`])([\\s\\S]*?)\\1`, 'g');
  
  outputContent = outputContent.replace(blockRegex, (match, quote, originalDesc) => {
    const safeDescVi = translations[englishName].description.replace(/\n/g, '\\n').replace(/"/g, '\\"');
    const safeNameVi = translations[englishName].name.replace(/"/g, '\\"');
    return `name: "${englishName}",
    name_vi: "${safeNameVi}",
    description: ${quote}${originalDesc}${quote},
    description_vi: "${safeDescVi}"`;
  });
});

fs.writeFileSync(path, outputContent, 'utf8');
console.log('Added bilingual fields successfully!');
