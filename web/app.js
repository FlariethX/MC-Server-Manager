const SYMBOLS_LIST = ["Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ", "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ", "Ⓐ", "Ⓑ", "Ⓒ", "Ⓓ", "Ⓔ", "Ⓕ", "Ⓖ", "Ⓗ", "Ⓘ", "Ⓙ", "Ⓚ", "Ⓛ", "Ⓜ", "Ⓝ", "Ⓞ", "Ⓟ", "Ⓠ", "Ⓡ", "Ⓢ", "Ⓣ", "Ⓤ", "Ⓥ", "Ⓦ", "Ⓧ", "Ⓨ", "Ⓩ", "ᴀ", "ʙ", "ᴄ", "ᴅ", "ᴇ", "ғ", "ɢ", "ʜ", "ɪ", "ᴊ", "ᴋ", "ʟ", "ᴍ", "ɴ", "ᴏ", "ᴘ", "ǫ", "ʀ", "s", "ᴛ", "ᴜ", "ᴠ", "ᴡ", "x", "ʏ", "ᴢ", "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ", "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "ｘ", "ｙ", "ｚ", "⒜", "⒝", "⒞", "⒟", "⒠", "⒡", "⒢", "⒣", "⒤", "⒥", "⒦", "⒧", "⒨", "⒩", "⒪", "⒫", "⒬", "⒭", "⒮", "⒯", "⒰", "⒱", "⒲", "⒳", "⒴", "⒵", "ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ", "ⓕ", "ⓖ", "ⓗ", "ⓘ", "ⓙ", "ⓚ", "ⓛ", "ⓜ", "ⓝ", "ⓞ", "ⓟ", "ⓠ", "ⓡ", "ⓢ", "ⓣ", "ⓤ", "ⓥ", "ⓦ", "ⓧ", "ⓨ", "ⓩ", "⓪", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿", "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴", "➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒", "➓", "⑴", "⑵", "⑶", "⑷", "⑸", "⑹", "⑺", "⑻", "⑼", "⑽", "⑾", "⑿", "⒀", "⒁", "⒂", "⒃", "⒄", "⒅", "⒆", "⒇", "⒈", "⒉", "⒊", "⒋", "⒌", "⒍", "⒎", "⒏", "⒐", "⒑", "⒒", "⒓", "⒔", "⒕", "⒖", "⒗", "⒘", "⒙", "⒚", "⒛", "½", "⅓", "¼", "⅕", "⅙", "⅐", "⅛", "⅑", "⅒", "⅔", "⅖", "¾", "⅗", "⅜", "⅘", "⅚", "⅝", "⅞", "℅", "⅟", "‱", "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "Ⅺ", "Ⅻ", "Ⅼ", "⁰", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "⁺", "⁻", "⁼", "⁽", "⁾", "ⁿ", "ⁱ", "₊", "₋", "₌", "₍", "₎", "ₐ", "ₑ", "ₒ", "ₓ", "ₔ", "≤", "≥", "≦", "≧", "≨", "≩", "≮", "≯", "≰", "≱", "≲", "≳", "≴", "≵", "≡", "±", "◆", "◇", "◈", "◊", "⋄", "♦", "♢", "⋆", "✢", "✣", "✤", "✥", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "✱", "✲", "✳", "✴", "✵", "✶", "✷", "✸", "✹", "✺", "✻", "✼", "✽", "✾", "✿", "❀", "❁", "❂", "❃", "❄", "❅", "❆", "❇", "❈", "❉", "❊", "❋", "❖", "▲", "△", "▴", "▵", "▼", "▽", "▾", "▿", "▶", "▷", "▸", "▹", "►", "▻", "◀", "◁", "◂", "◃", "◄", "◅", "◭", "◮", "➱", "➲", "➳", "➴", "➵", "➶", "➷", "➸", "➘", "➙", "➚", "➛", "➜", "➝", "➞", "➟", "➠", "➡", "➢", "➣", "➤", "➥", "➦", "➧", "➨", "➩", "➪", "➫", "➬", "➭", "➮", "➯", "➔", "➹", "➺", "➻", "➼", "➽", "➾", "←", "↑", "→", "↓", "↔", "↕", "↖", "↗", "↘", "↙", "↚", "↛", "↜", "↝", "↞", "↟", "↠", "↡", "↢", "↣", "↤", "↥", "↦", "↧", "↨", "↩", "↪", "↫", "↬", "↭", "↮", "↯", "↰", "↱", "↲", "↳", "↴", "↵", "↶", "↷", "↸", "↹", "↼", "↽", "↾", "↿", "⇀", "⇁", "⇂", "⇃", "⇄", "⇅", "⇆", "⇇", "⇈", "⇉", "⇊", "⇋", "⇌", "⇍", "⇎", "⇏", "⇐", "⇑", "⇒", "⇓", "⇔", "⇕", "⇖", "⇗", "⇘", "⇙", "⇚", "⇛", "⇜", "⇝", "⇞", "⇟", "⇠", "⇡", "⇢", "⇣", "⇤", "⇥", "⇦", "⇧", "⇨", "⇩", "⇪", "☇", "↺", "↻", "⇵", "⏏", "⏩", "⏪", "⏭", "⏮", "⏯", "⊲", "⊳", "⊴", "⊵", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▉", "▊", "▋", "▌", "▍", "■", "▬", "▏", "▕", "▐", "░", "▒", "▓", "▔", "▀", "⧈", "□", "▣", "▤", "▥", "▦", "▧", "▨", "▩", "▪", "▫", "▭", "▮", "▯", "▰", "▱", "◘", "◙", "◚", "◛", "◧", "◨", "◩", "◪", "◫", "☐", "❏", "❐", "❑", "❒", "回", "♏", "♒", "◍", "◎", "●", "◐", "◑", "◒", "◓", "◔", "◕", "◖", "◗", "◯", "✇", "☮", "☯", "❍", "⊕", "⊖", "⊗", "⊘", "⊙", "⊚", "⊛", "⊜", "⊝", "○", "｡", "☣", "☢", "㊣", "⭘", "◦", "☪", "⏺", "∅", "⋅", "㊚", "㊛", ".", "･", "∙", "⋮", "⋯", "⋰", "⋱", "°", "∵", "∴", ":", "ﾟ", "∶", "∷", "•", "᛫", "᛬", "☉", "✚", "☖", "☗", "☀", "╳", "✕", "✖", "✗", "✘", "☓", "❌", "♱", "♰", "✞", "✟", "†", "‡", "☨", "☒", "✓", "✔", "☑", "✙", "✛", "✜", "'", "‚", "‛", "\"", "„", "‟", "′", "″", "‴", "‵", "‶", "‷", "՚", "՛", "՜", "՝", "՞", "❛", "❜", "❝", "❞", "─", "━", "│", "┃", "┄", "┅", "┆", "┇", "┈", "┉", "┊", "┋", "┌", "┍", "–", "—", "┱", "┲", "‑", "‒", "―", "﹏", "﹋", "﹌", "﹉", "﹊", "﹍", "﹎", "☰", "☱", "☳", "☴", "☶", "☷", "☲", "☵", "−", "‾", "‗", "⁃", "≣", "=", "Ξ", "≪", "≫", "┎", "┏", "┐", "┑", "┒", "┓", "└", "┕", "┖", "┗", "┘", "┙", "┚", "┛", "├", "┝", "┞", "┟", "┠", "┡", "┢", "┣", "┤", "┥", "┦", "┧", "┨", "┩", "┪", "┫", "┬", "┭", "┮", "┯", "┰", "┳", "┴", "┵", "┶", "┷", "┸", "┹", "┺", "┻", "┼", "┽", "┾", "┿", "╀", "╁", "╂", "╃", "╄", "╅", "╆", "╇", "╈", "╉", "╊", "╋", "╌", "╍", "╎", "╏", "═", "║", "╒", "╓", "╔", "╕", "╖", "╗", "╘", "╙", "╚", "╛", "╜", "╝", "╞", "╟", "╠", "╡", "╢", "╣", "╤", "╥", "╦", "╧", "╨", "╩", "╪", "╫", "╬", "╭", "╮", "╯", "╰", "╱", "╲", "╴", "╵", "╶", "╷", "╸", "╹", "╺", "╻", "╼", "╽", "╾", "╿", "☽", "☾", "⌃", "⌄", "⌅", "⌆", "⌇", "⌈", "⌉", "⌊", "⌋", "∹", "∺", "∻", "∼", "∽", "∾", "∿", "≀", "≁", "≂", "≃", "≄", "≅", "≆", "≇", "≈", "≉", "≊", "≋", "≌", "≍", "⊢", "⊣", "⊤", "⊥", "⊦", "⊧", "⊨", "⊩", "⊪", "⊫", "⊬", "⊭", "⊮", "⊯", "≎", "≏", "≐", "≑", "≒", "≓", "≔", "≕", "≖", "≗", "≘", "≙", "≚", "≛", "≜", "≝", "≞", "≟", "≠", "≢", "≬", "≭", "≶", "≷", "≸", "≹", "≺", "≻", "≼", "≽", "≾", "≿", "⊀", "⊁", "⊂", "⊃", "⊄", "⊅", "⊆", "⊇", "⊈", "⊉", "⊊", "⊋", "⊌", "⊍", "⊎", "⊏", "⊐", "⊑", "⊒", "⊓", "⊔", "⊡", "⊰", "⊱", "⊶", "⊷", "⊸", "⊹", "⊺", "⊻", "⊼", "⊽", "⊾", "⊿", "⋀", "⋁", "⋂", "⋃", "⋇", "⋈", "⋉", "⋊", "⋋", "⋌", "⋍", "⋎", "⋏", "⋐", "⋑", "⋒", "⋓", "⋔", "⋕", "⋖", "⋗", "⋘", "⋙", "⋚", "⋛", "⋜", "⋝", "⋞", "⋟", "﹃", "﹄", "∟", "「", "」", "‖", "︴", "⌠", "⌡", "Σ", "Π", "∃", "∄", "∉", "∋", "∌", "∧", "∨", "∥", "⋠", "⋡", "⋢", "⋣", "⋤", "⋥", "⋦", "⋧", "⋨", "⋩", "⋪", "⋫", "⋬", "⋭", "⋲", "⋳", "⋴", "⋵", "⋶", "⋷", "⋸", "⋹", "⋺", "⋻", "⋼", "⋽", "⋾", "⋿", "∣", "∤", "∦", "∩", "∪", "∫", "∬", "∭", "∮", "∯", "∰", "«", "»", "๑", "⁅", "⁆", "⁐", "ℵ", "ℶ", "ℷ", "ℸ", "◠", "◡", "ぃ", "【", "】", "ʔ", "ʕ", "∊", "∍", "∈", "‸", "‹", "›", "❣", "❤", "❥", "❦", "♠", "♥", "♡", "❧", "♤", "☃", "☻", "☺", "☹", "ツ", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅", "♧", "🗡", "🏹", "🔱", "🧪", "🪓", "⛏", "🛡", "🎣", "✂", "🍖", "🔔", "☂", "☔", "⛄", "⌛", "⌚", "☎", "☏", "✁", "✃", "✄", "✆", "✎", "✏", "✐", "✑", "✒", "✈", "⚓", "⚡", "🌊", "⭐", "🔥", "♔", "♕", "♚", "♛", "♨", "⚔", "☠", "⚠", "۞", "✌", "✍", "☚", "☛", "☜", "☝", "☞", "☟", "⛀", "⛁", "⛃", "⛂", "♪", "♩", "♫", "♬", "☁", "☄", "🌧", "⛈", "☼", "⚗", "⚑", "✉", "⚐", "☤", "☩", "☫", "☬", "☭", "♂", "♀", "☿", "⛨", "۩", "☊", "☋", "☌", "☍", "⁈", "⁉", "☥", "∡", "∢", "∱", "∲", "∳", "∸", "∞", "Δ", "ʊ", "ღ", "₪", "∀", "®", "©", "℠", "℡", "™"];

const PLACEHOLDER_DATA = [
  {
    title: "CheckItem",
    source: "/papi ecloud download CheckItem",
    description: "Дозволяє перевірити інвентар гравця на наявність певного предмета.",
    items: [
      { code: "%checkitem_<modifier1>,<modifier2>,<...>%", note: "Повертає, чи є в гравця предмет" },
      { code: "%checkitem_amount_<modifier1>,<modifier2>,<...>%", note: "Повертає кількість предметів у гравця" },
      { code: "%checkitem_remove_<modifier1>,<modifier2>,<...>%", note: "Видаляє предмети з інвентаря гравця. Можна поєднувати з amount, головне щоб він стояв перед remove (напр. %checkitem_amount_remove_<...>%). Обережно — предмети видаляються НАЗАВЖДИ" },
      { code: "%checkitem_give_<modifier1>,<modifier2>,<...>%", note: "Видає гравцю предмети. Повертає true, якщо успішно; інакше — кількість НЕ виданих предметів (частина предметів могла видатись навіть при невдачі)" },
      { code: "%checkitem_getinfo:<slot>_<modifier1>,<modifier2>,<...>%", note: "Повертає інформацію про предмет у слоті (у тому ж порядку, що й у вікі), розділену через \" &r\" (напр. %checkitem_getinfo:0_mat:%)" },
    ],
  },
  {
    title: "ParseOther",
    source: "/papi ecloud download ParseOther",
    description: "Дозволяє парсити будь-який плейсхолдер для іншого гравця. Для username чи uuid потрібно використовувати unsafe-версію плейсхолдера. Обов'язково додавайте дужки {} — без них не працюватиме.",
    items: [
      { code: "%parseother_{username}_{placeholder_without_percent_signs}%" },
      { code: "%parseother_unsafe_{placeholder_for_username}_{placeholder_without_percent_signs}%" },
      { code: "%parseother_{uuid}_{placeholder_without_percent_signs}%" },
      { code: "%parseother_unsafe_{placeholder_for_uuid}_{placeholder_without_percent_signs}%" },
    ],
  },
  {
    title: "Player",
    source: "/papi ecloud download Player",
    description: "Різноманітні плейсхолдери гравця, який викликає дію.",
    items: [
      "player_allow_flight", "player_armor_helmet_name", "player_armor_helmet_data", "player_armor_helmet_durability",
      "player_armor_chestplate_name", "player_armor_chestplate_data", "player_armor_chestplate_durability",
      "player_armor_leggings_name", "player_armor_leggings_data", "player_armor_leggings_durability",
      "player_armor_boots_name", "player_armor_boots_data", "player_armor_boots_durability",
      "player_bed_x", "player_bed_y", "player_bed_z", "player_bed_world",
      "player_biome", "player_biome_capitalized", "player_block_underneath", "player_can_pickup_items",
      "player_colored_ping", "player_compass_world", "player_compass_x", "player_compass_y", "player_compass_z",
      "player_custom_name", "player_current_exp", "player_direction", "player_direction_xz",
      "player_displayname", "player_list_name", "player_exp", "player_exp_to_level",
      "player_first_join_date", "player_first_played", "player_first_join", "player_first_played_formatted",
      "player_fly_speed", "player_food_level", "player_gamemode", "player_has_empty_slot",
      "player_has_played_before", "player_empty_slots", "player_has_health_boost",
      "player_has_potioneffect_<effect>", "player_has_permission_<permission>",
      "player_health", "player_health_boost", "player_health_rounded", "player_health_scale",
      "player_ip", "player_online", "player_is_whitelisted", "player_is_banned",
      "player_is_flying", "player_is_sneaking", "player_is_sprinting", "player_is_sleeping",
      "player_is_inside_vehicle", "player_is_op",
      "player_item_in_hand", "player_item_in_hand_name", "player_item_in_hand_data", "player_item_in_hand_durability",
      "player_item_in_hand_level_<enchantment>",
      "player_item_in_offhand", "player_item_in_offhand_name", "player_item_in_offhand_data", "player_item_in_offhand_durability",
      "player_item_in_offhand_level_<enchantment>",
      "player_locale", "player_locale_display_name", "player_locale_short", "player_locale_country", "player_locale_display_country",
      "player_last_damage", "player_last_played", "player_last_join", "player_last_played_formatted", "player_last_join_date",
      "player_level", "player_light_level", "player_max_air", "player_max_health", "player_max_health_rounded",
      "player_max_no_damage_ticks", "player_minutes_lived", "player_name", "player_no_damage_ticks",
      "player_ping", "player_ping_<playername>", "player_remaining_air", "player_saturation",
      "player_seconds_lived", "player_sleep_ticks", "player_thunder_duration", "player_ticks_lived",
      "player_time", "player_time_offset", "player_total_exp", "player_uuid",
      "player_walk_speed", "player_weather_duration", "player_world", "player_world_type",
      "player_world_time_12", "player_world_time_24", "player_x", "player_y", "player_z",
      "player_yaw", "player_pitch", "player_absorption",
    ],
  },
  {
    title: "Statistic",
    source: "/papi ecloud download Statistic",
    description: "Підтримує всю статистику зі SpigotAPI: %statistic_<StatisticType>%",
    groups: [
      {
        label: "Блоки, предмети, істоти тощо",
        items: [
          "statistic_mine_block:<material>", "statistic_use_item:<Item Material>",
          "statistic_break_item:<Item Material>", "statistic_craft_item:<Item Material>",
          "statistic_kill_entity:<MobType>", "statistic_entity_killed_by:<MobType>",
        ],
      },
      {
        label: "Інша статистика",
        items: [
          "statistic_mob_kills", "statistic_mine_block", "statistic_use_item", "statistic_break_item",
          "statistic_craft_item", "statistic_ticks_played", "statistic_seconds_played", "statistic_minutes_played",
          "statistic_hours_played", "statistic_days_played", "statistic_time_played",
          "statistic_time_played:seconds", "statistic_time_played:minutes", "statistic_time_played:hours", "statistic_time_played:days",
          "statistic_animals_bred", "statistic_armor_cleaned", "statistic_banner_cleaned", "statistic_beacon_interacted",
          "statistic_boat_one_cm", "statistic_brewingstand_interaction", "statistic_cake_slices_eaten",
          "statistic_cauldron_filled", "statistic_cauldron_used", "statistic_chest_opened", "statistic_climb_one_cm",
          "statistic_crafting_table_interaction", "statistic_crouch_one_cm", "statistic_damage_dealt", "statistic_damage_taken",
          "statistic_deaths", "statistic_dispenser_inspected", "statistic_dive_one_cm", "statistic_drop",
          "statistic_dropper_inspected", "statistic_enderchest_opened", "statistic_fall_one_cm", "statistic_fish_caught",
          "statistic_flower_potted", "statistic_fly_one_cm", "statistic_furnace_interaction", "statistic_hopper_inspected",
          "statistic_horse_one_cm", "statistic_item_enchanted", "statistic_jump", "statistic_junk_fished",
          "statistic_leave_game", "statistic_minecart_one_cm", "statistic_noteblock_played", "statistic_noteblock_tuned",
          "statistic_pig_one_cm", "statistic_player_kills", "statistic_record_played", "statistic_sprint_one_cm",
          "statistic_swim_one_cm", "statistic_talked_to_villager", "statistic_time_since_death", "statistic_ticks_since_death",
          "statistic_seconds_since_death", "statistic_minutes_since_death", "statistic_hours_since_death", "statistic_days_since_death",
          "statistic_traded_with_villager", "statistic_trapped_chest_triggered", "statistic_walk_one_cm", "statistic_sleep_in_bed",
          "statistic_sneak_time", "statistic_aviate_one_cm",
        ],
      },
    ],
  },
];

const ICONS = {
  play: '<svg viewBox="0 0 24 24"><path d="M7 4v16l14-8z"/></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 13c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 8.74A7.93 7.93 0 004 13c0 4.42 3.58 8 8 8v3l5-4-5-4z"/></svg>',
  save: '<svg viewBox="0 0 24 24"><path d="M17 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7l-4-4zm-5 16a3 3 0 110-6 3 3 0 010 6zM6 6h9v4H6V6z"/></svg>',
  folder: '<svg viewBox="0 0 24 24"><path d="M10 4H2v16h20V6H12l-2-2z"/></svg>',
  document: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm0 6V3.5L18.5 8H14z"/></svg>',
  terminal: '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-8.5 12h4v-1.5h-4V16zM7.3 14.3l-1.06-1.06L8.94 10.5 6.24 7.76l1.06-1.06L11.06 10.5 7.3 14.3z"/></svg>',
  server: '<svg viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm14 3.5a1 1 0 100 2 1 1 0 000-2zM4 13h16a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1zm14 3.5a1 1 0 100 2 1 1 0 000-2z"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>',
  info: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>',
  symbols: '<svg viewBox="0 0 24 24"><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/></svg>',
  placeholders: '<svg viewBox="0 0 24 24"><path d="M6 4h12a1 1 0 011 1v3h-2V6H7v12h10v-2h2v3a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm7.5 5.5l4.5 2.5-4.5 2.5v-2H10v-1h3.5v-2z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3a1 1 0 011 1v9.59l2.79-2.8a1 1 0 111.42 1.42l-4.5 4.5a1 1 0 01-1.42 0l-4.5-4.5a1 1 0 111.42-1.42L11 13.59V4a1 1 0 011-1zM5 19a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>',
  coffee: '<svg viewBox="0 0 24 24"><path d="M4 8h12v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z"/><path d="M16 9h1.5a3 3 0 010 6H16v-2h1.5a1 1 0 000-2H16V9z"/><rect x="6.5" y="1.5" width="1.6" height="4.5"/><rect x="9.7" y="1.5" width="1.6" height="4.5"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1.4"/><rect x="10" y="1.5" width="1.6" height="3"/><rect x="13.4" y="1.5" width="1.6" height="3"/><rect x="10" y="19.5" width="1.6" height="3"/><rect x="13.4" y="19.5" width="1.6" height="3"/><rect x="1.5" y="10" width="3" height="1.6"/><rect x="1.5" y="13.4" width="3" height="1.6"/><rect x="19.5" y="10" width="3" height="1.6"/><rect x="19.5" y="13.4" width="3" height="1.6"/></svg>',
  ram: '<svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="9" rx="1.5"/><rect x="5.5" y="14.5" width="2" height="4"/><rect x="9.5" y="14.5" width="2" height="4"/><rect x="13.5" y="14.5" width="2" height="4"/><rect x="17.5" y="14.5" width="2" height="4"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

let symbolsRendered = false;
let symbolsToastTimer = null;

function renderSymbolsGrid() {
  if (symbolsRendered) return;
  symbolsRendered = true;
  const frag = document.createDocumentFragment();
  SYMBOLS_LIST.forEach((ch) => {
    const tile = document.createElement("div");
    tile.className = "symbol-tile";
    tile.textContent = ch;
    tile.title = ch;
    tile.addEventListener("click", () => copySymbol(ch, tile));
    frag.appendChild(tile);
  });
  el.symbolsGrid.appendChild(frag);
}

function copySymbol(ch, tile) {
  copyTextToClipboard(ch);

  tile.classList.add("copied");
  setTimeout(() => tile.classList.remove("copied"), 260);

  el.symbolsToast.textContent = "Скопійовано: " + ch;
  el.symbolsToast.classList.add("show");
  clearTimeout(symbolsToastTimer);
  symbolsToastTimer = setTimeout(() => {
    el.symbolsToast.classList.remove("show");
  }, 1200);
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  document.body.removeChild(ta);
}

function closeInstructionsDropdown() {}

function openSymbolsDropdown() {
  closePlaceholdersDropdown();
  closeInstructionsDropdown();
  closePaperVersionDropdown();
  closeJavaVersionDropdown();
  renderSymbolsGrid();
  el.symbolsDropdown.classList.add("open");

  const btnRect = el.symbolsBtn.getBoundingClientRect();
  el.symbolsDropdown.style.left = "0px";
  el.symbolsDropdown.style.top = "0px";

  requestAnimationFrame(() => {
    const dropRect = el.symbolsDropdown.getBoundingClientRect();
    let left = btnRect.right - dropRect.width;
    let top = btnRect.bottom + 8;
    if (left < 8) left = 8;
    if (left + dropRect.width > window.innerWidth - 8) left = window.innerWidth - dropRect.width - 8;
    if (top + dropRect.height > window.innerHeight - 8) top = btnRect.top - dropRect.height - 8;
    if (top < 8) top = 8;
    el.symbolsDropdown.style.left = left + "px";
    el.symbolsDropdown.style.top = top + "px";
  });
}

function closeSymbolsDropdown() {
  el.symbolsDropdown.classList.remove("open");
}

function toggleSymbolsDropdown(e) {
  e.stopPropagation();
  if (el.symbolsDropdown.classList.contains("open")) {
    closeSymbolsDropdown();
  } else {
    openSymbolsDropdown();
  }
}

let placeholdersRendered = false;
let placeholdersToastTimer = null;

function makePlaceholderItem(code, note) {
  const item = document.createElement("div");
  item.className = "placeholder-item";
  const codeEl = document.createElement("span");
  codeEl.className = "placeholder-code";
  codeEl.textContent = code;
  item.appendChild(codeEl);
  if (note) {
    const noteEl = document.createElement("span");
    noteEl.className = "placeholder-note";
    noteEl.textContent = note;
    item.appendChild(noteEl);
  }
  item.addEventListener("click", () => copyPlaceholder(code, item));
  return item;
}

function renderPlaceholdersList() {
  if (placeholdersRendered) return;
  placeholdersRendered = true;

  const frag = document.createDocumentFragment();
  const jumpFrag = document.createDocumentFragment();

  PLACEHOLDER_DATA.forEach((section, index) => {
    const sectionId = "placeholder-section-" + index;

    const sectionEl = document.createElement("div");
    sectionEl.className = "placeholder-section";
    sectionEl.id = sectionId;

    const head = document.createElement("div");
    head.className = "placeholder-section-head";
    head.innerHTML = `<span class="placeholder-title">${escapeHtml(section.title)}</span>`;
    const sourceEl = document.createElement("span");
    sourceEl.className = "placeholder-source";
    sourceEl.textContent = section.source;
    sourceEl.title = "Копіювати команду";
    sourceEl.addEventListener("click", () => copyPlaceholder(section.source, sourceEl));
    head.appendChild(sourceEl);
    sectionEl.appendChild(head);

    const desc = document.createElement("div");
    desc.className = "placeholder-description";
    desc.textContent = section.description;
    sectionEl.appendChild(desc);

    if (section.items) {
      section.items.forEach((entry) => {
        if (typeof entry === "string") {
          sectionEl.appendChild(makePlaceholderItem(`%${entry}%`));
        } else {
          sectionEl.appendChild(makePlaceholderItem(entry.code, entry.note));
        }
      });
    }

    if (section.groups) {
      section.groups.forEach((group) => {
        const label = document.createElement("div");
        label.className = "placeholder-group-label";
        label.textContent = group.label;
        sectionEl.appendChild(label);
        group.items.forEach((code) => {
          sectionEl.appendChild(makePlaceholderItem(`%${code}%`));
        });
      });
    }

    frag.appendChild(sectionEl);

    const jumpBtn = document.createElement("button");
    jumpBtn.className = "placeholder-jump-btn";
    jumpBtn.type = "button";
    jumpBtn.textContent = section.title;
    jumpBtn.addEventListener("click", () => {
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    jumpFrag.appendChild(jumpBtn);
  });

  el.placeholdersList.appendChild(frag);
  el.placeholdersJump.appendChild(jumpFrag);
}

function copyPlaceholder(code, item) {
  copyTextToClipboard(code);

  item.classList.add("copied");
  setTimeout(() => item.classList.remove("copied"), 260);

  el.placeholdersToast.textContent = "Скопійовано: " + code;
  el.placeholdersToast.classList.add("show");
  clearTimeout(placeholdersToastTimer);
  placeholdersToastTimer = setTimeout(() => {
    el.placeholdersToast.classList.remove("show");
  }, 1200);
}

function openPlaceholdersDropdown() {
  closeSymbolsDropdown();
  closeInstructionsDropdown();
  closePaperVersionDropdown();
  closeJavaVersionDropdown();
  renderPlaceholdersList();
  el.placeholdersDropdown.classList.add("open");

  const btnRect = el.placeholdersBtn.getBoundingClientRect();
  el.placeholdersDropdown.style.left = "0px";
  el.placeholdersDropdown.style.top = "0px";

  requestAnimationFrame(() => {
    const dropRect = el.placeholdersDropdown.getBoundingClientRect();
    let left = btnRect.right - dropRect.width;
    let top = btnRect.bottom + 8;
    if (left < 8) left = 8;
    if (left + dropRect.width > window.innerWidth - 8) left = window.innerWidth - dropRect.width - 8;
    if (top + dropRect.height > window.innerHeight - 8) top = btnRect.top - dropRect.height - 8;
    if (top < 8) top = 8;
    el.placeholdersDropdown.style.left = left + "px";
    el.placeholdersDropdown.style.top = top + "px";
  });
}

function closePlaceholdersDropdown() {
  el.placeholdersDropdown.classList.remove("open");
}

function togglePlaceholdersDropdown(e) {
  e.stopPropagation();
  if (el.placeholdersDropdown.classList.contains("open")) {
    closePlaceholdersDropdown();
  } else {
    openPlaceholdersDropdown();
  }
}

function renderIcons() {
  document.querySelectorAll(".ico").forEach((el) => {
    const name = el.dataset.icon;
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

const el = {
  statusDot: document.getElementById("statusDot"),
  statusText: document.getElementById("statusText"),
  coreInfoVersion: document.getElementById("coreInfoVersion"),
  coreInfoJava: document.getElementById("coreInfoJava"),
  coreInfoJar: document.getElementById("coreInfoJar"),
  resCpuLabel: document.getElementById("resCpuLabel"),
  resRamLabel: document.getElementById("resRamLabel"),
  resUptimeLabel: document.getElementById("resUptimeLabel"),
  ramSlider: document.getElementById("ramSlider"),
  ramSliderValue: document.getElementById("ramSliderValue"),
  ramSliderMin: document.getElementById("ramSliderMin"),
  ramSliderMax: document.getElementById("ramSliderMax"),
  paperVersionBtn: document.getElementById("paperVersionBtn"),
  paperVersionBtnLabel: document.getElementById("paperVersionBtnLabel"),
  paperVersionDropdown: document.getElementById("paperVersionDropdown"),
  paperVersionList: document.getElementById("paperVersionList"),
  paperBrowseDirBtn: document.getElementById("paperBrowseDirBtn"),
  javaVersionBtn: document.getElementById("javaVersionBtn"),
  javaVersionBtnLabel: document.getElementById("javaVersionBtnLabel"),
  javaVersionDropdown: document.getElementById("javaVersionDropdown"),
  javaVersionList: document.getElementById("javaVersionList"),
  installAllBtn: document.getElementById("installAllBtn"),
  installStatusHint: document.getElementById("installStatusHint"),
  jarPathInput: document.getElementById("jarPathInput"),
  browseJarBtn: document.getElementById("browseJarBtn"),
  startBtn: document.getElementById("startBtn"),
  stopBtn: document.getElementById("stopBtn"),
  restartBtn: document.getElementById("restartBtn"),
  consoleBox: document.getElementById("consoleBox"),
  commandInput: document.getElementById("commandInput"),
  commandSuggestions: document.getElementById("commandSuggestions"),
  editorTabs: document.getElementById("editorTabs"),
  editorBox: document.getElementById("editorBox"),
  editorHighlight: document.getElementById("editorHighlight").querySelector("code"),
  lineNumbers: document.getElementById("lineNumbers"),
  saveBtn: document.getElementById("saveBtn"),
  backBtn: document.getElementById("backBtn"),
  addBtn: document.getElementById("addBtn"),
  explorerPath: document.getElementById("explorerPath"),
  fileTree: document.getElementById("fileTree"),
  refreshBtn: document.getElementById("refreshBtn"),
  contextMenu: document.getElementById("contextMenu"),
  symbolsBtn: document.getElementById("symbolsBtn"),
  symbolsDropdown: document.getElementById("symbolsDropdown"),
  symbolsGrid: document.getElementById("symbolsGrid"),
  symbolsToast: document.getElementById("symbolsToast"),
  placeholdersBtn: document.getElementById("placeholdersBtn"),
  placeholdersDropdown: document.getElementById("placeholdersDropdown"),
  placeholdersJump: document.getElementById("placeholdersJump"),
  placeholdersList: document.getElementById("placeholdersList"),
  placeholdersToast: document.getElementById("placeholdersToast"),
};

let openTabs = [];
let activeTabPath = null;
let isRestarting = false;
let currentDirPath = null;
let currentDirReady = false;
let serverRunning = false;

function updateCoreInfo({ version, java, jarName } = {}) {
  if (version !== undefined) {
    el.coreInfoVersion.textContent = version || "—";
    el.coreInfoVersion.classList.toggle("is-empty", !version);
    if (typeof renderPaperVersionList === "function" && el.paperVersionList) renderPaperVersionList();
  }
  if (java !== undefined) {
    el.coreInfoJava.textContent = java || "—";
    el.coreInfoJava.classList.toggle("is-empty", !java);
    if (typeof renderJavaVersionList === "function" && el.javaVersionList) renderJavaVersionList();
  }
  if (jarName !== undefined) {
    el.coreInfoJar.textContent = jarName || "—";
    el.coreInfoJar.classList.toggle("is-empty", !jarName);
  }
}

function setRunningUI(isRunning) {
  serverRunning = !!isRunning;
  if (isRunning) {
    el.startBtn.disabled = true;
    el.startBtn.textContent = "";
    el.startBtn.innerHTML = "Працює...";
    el.restartBtn.disabled = false;
    el.stopBtn.disabled = false;
    el.commandInput.disabled = false;
    if (el.ramSlider) el.ramSlider.disabled = true;

    el.statusDot.className = "dot dot-on";
    el.statusText.className = "status-text status-on";
    el.statusText.textContent = "УВІМКНЕНО";
    document.getElementById("statusBadge").style.background = "var(--status-on-bg)";
  } else {
    el.startBtn.disabled = false;
    el.startBtn.innerHTML = '<span class="icon"><span class="ico" data-icon="play"></span></span> Старт';
    renderIconsIn(el.startBtn);
    el.restartBtn.disabled = true;
    el.stopBtn.disabled = true;
    el.commandInput.disabled = true;
    if (el.ramSlider) el.ramSlider.disabled = false;

    el.statusDot.className = "dot dot-off";
    el.statusText.className = "status-text status-off";
    el.statusText.textContent = "ВИМКНЕНО";
    document.getElementById("statusBadge").style.background = "var(--status-off-bg)";
  }
}

function setRestartingUI() {
  el.startBtn.disabled = true;
  el.restartBtn.disabled = true;
  el.stopBtn.disabled = true;
  el.commandInput.disabled = true;

  el.statusDot.className = "dot dot-restart";
  el.statusText.className = "status-text status-restart";
  el.statusText.textContent = "ПЕРЕЗАПУСК";
  document.getElementById("statusBadge").style.background = "var(--status-restart-bg)";
}

function renderIconsIn(container) {
  container.querySelectorAll(".ico").forEach((iconEl) => {
    const name = iconEl.dataset.icon;
    if (ICONS[name]) iconEl.innerHTML = ICONS[name];
  });
}

const ANSI_FG = {
  30: "#4b4b52", 31: "#ff6b60", 32: "#8bd17c", 33: "#ffb454",
  34: "#5ec2ff", 35: "#e070ff", 36: "#56d4dd", 37: "#d8d8dc",
  90: "#6b6b70", 91: "#ff8c82", 92: "#a8e39a", 93: "#ffca7a",
  94: "#8fd3ff", 95: "#f2a6ff", 96: "#8ee6ec", 97: "#f5f5f7",
};

function escapeHtml(str) {
  return str.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

function ansiToHtml(rawText, suppressColor) {
  const ESC = /\u001b\[([0-9;]*)m/g;
  let result = "";
  let openSpan = false;
  let lastIndex = 0;
  let currentColor = null;
  let currentBold = false;

  function closeSpan() {
    if (openSpan) {
      result += "</span>";
      openSpan = false;
    }
  }
  function openSpanIfNeeded() {
    const color = suppressColor ? null : currentColor;
    if (!openSpan && (color || currentBold)) {
      const styles = [];
      if (color) styles.push(`color:${color}`);
      if (currentBold) styles.push("font-weight:600");
      result += `<span style="${styles.join(";")}">`;
      openSpan = true;
    }
  }

  let match;
  while ((match = ESC.exec(rawText)) !== null) {
    const chunk = rawText.slice(lastIndex, match.index);
    if (chunk) {
      openSpanIfNeeded();
      result += escapeHtml(chunk);
    }
    const codes = match[1].split(";").filter(Boolean).map(Number);
    if (codes.length === 0) codes.push(0);
    for (const code of codes) {
      if (code === 0) {
        currentColor = null;
        currentBold = false;
      } else if (code === 1) {
        currentBold = true;
      } else if (code === 22) {
        currentBold = false;
      } else if (code === 39) {
        currentColor = null;
      } else if (ANSI_FG[code]) {
        currentColor = ANSI_FG[code];
      }
    }
    closeSpan();
    lastIndex = ESC.lastIndex;
  }
  const tail = rawText.slice(lastIndex);
  if (tail) {
    openSpanIfNeeded();
    result += escapeHtml(tail);
  }
  closeSpan();
  return result;
}

const MAX_CONSOLE_CHUNKS = 400;

function detectLogLevel(line) {
  if (/\b(ERROR|FATAL)\]|^\[STDERR\]/i.test(line)) return "error";
  if (/\bWARN\]/i.test(line)) return "warn";
  if (/^> /.test(line)) return "cmd";
  if (/ joined the game/.test(line)) return "join";
  if (/ left the game/.test(line)) return "leave";
  return null;
}

function appendConsoleText(text) {
  if (!text) return;

  const wasScrolledToBottom =
    el.consoleBox.scrollTop + el.consoleBox.clientHeight >= el.consoleBox.scrollHeight - 4;

  const lines = text.split(/(?<=\n)/);
  for (const rawLine of lines) {
    if (!rawLine) continue;
    const level = detectLogLevel(rawLine);
    const chunk = document.createElement("span");
    chunk.className = "console-chunk" + (level ? ` log-${level}` : "");
    const suppressAnsiColor = level === "warn" || level === "error";
    chunk.innerHTML = ansiToHtml(rawLine, suppressAnsiColor);
    el.consoleBox.appendChild(chunk);
  }

  while (el.consoleBox.children.length > MAX_CONSOLE_CHUNKS) {
    el.consoleBox.removeChild(el.consoleBox.firstChild);
  }

  if (wasScrolledToBottom) {
    el.consoleBox.scrollTop = el.consoleBox.scrollHeight;
  }
}
window.appendConsoleText = appendConsoleText;

function onServerStopped() {
  appendConsoleText("");
  if (isRestarting) return;
  setRunningUI(false);
  resetResourceLabels();
  stopUptimeTimer();
}
window.onServerStopped = onServerStopped;

async function onServerReady() {
  await populateFileTree();
  await refreshPluginCommands();
}
window.onServerReady = onServerReady;

function resetResourceLabels() {
  if (el.resCpuLabel) el.resCpuLabel.textContent = "—";
  if (el.resRamLabel) el.resRamLabel.textContent = "—";
}

function onResourceSample(cpu, ram) {
  const active = cpu > 0 || ram > 0;
  if (el.resCpuLabel) el.resCpuLabel.textContent = active ? cpu.toFixed(0) + "%" : "—";
  if (el.resRamLabel) el.resRamLabel.textContent = active ? ram.toFixed(0) + " МБ" : "—";
}
window.onResourceSample = onResourceSample;

let uptimeIntervalId = null;
let uptimeStartMs = null;

function formatUptime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  if (hours > 0) return `${hours}г ${minutes}хв`;
  if (minutes > 0) return `${minutes}хв ${seconds}с`;
  return `${seconds}с`;
}

function tickUptime() {
  if (!el.resUptimeLabel || uptimeStartMs === null) return;
  el.resUptimeLabel.textContent = formatUptime((Date.now() - uptimeStartMs) / 1000);
}

function startUptimeTimer(startedAtEpochSeconds) {
  stopUptimeTimer();
  if (!startedAtEpochSeconds) return;
  uptimeStartMs = startedAtEpochSeconds * 1000;
  tickUptime();
  uptimeIntervalId = setInterval(tickUptime, 1000);
}

function stopUptimeTimer() {
  if (uptimeIntervalId !== null) {
    clearInterval(uptimeIntervalId);
    uptimeIntervalId = null;
  }
  uptimeStartMs = null;
  if (el.resUptimeLabel) el.resUptimeLabel.textContent = "—";
}

function onServerRestarting() {
  isRestarting = true;
  setRestartingUI();
  stopUptimeTimer();
}
window.onServerRestarting = onServerRestarting;

async function onServerRestarted(result) {
  isRestarting = false;
  setRunningUI(true);
  updateCoreInfo({ version: (result && result.jarVersion) || "", jarName: (result && result.jarName) || "" });
  startUptimeTimer(result && result.startedAt);
  await populateFileTree();
}
window.onServerRestarted = onServerRestarted;

function onRestartFailed(message) {
  isRestarting = false;
  setRunningUI(false);
  stopUptimeTimer();
  alert(message || "Не вдалося перезапустити сервер.");
}
window.onRestartFailed = onRestartFailed;

function onServerVersionDetected(version) {
  updateCoreInfo({ version });
}
window.onServerVersionDetected = onServerVersionDetected;

function onJavaVersionDetected(version) {
  updateCoreInfo({ java: version });
}
window.onJavaVersionDetected = onJavaVersionDetected;

let paperVersions = [];
let selectedPaperVersion = "";
let paperInstallDir = "";
let paperLoadError = "";
let paperLoading = false;

function openPaperVersionDropdown() {
  closeSymbolsDropdown();
  closePlaceholdersDropdown();
  closeInstructionsDropdown();
  closeJavaVersionDropdown();
  renderPaperVersionList();
  el.paperVersionDropdown.classList.add("open");
  el.paperVersionBtn.classList.add("open");

  const btnRect = el.paperVersionBtn.getBoundingClientRect();
  el.paperVersionDropdown.style.left = "0px";
  el.paperVersionDropdown.style.top = "0px";

  requestAnimationFrame(() => {
    const dropRect = el.paperVersionDropdown.getBoundingClientRect();
    let left = btnRect.left;
    let top = btnRect.bottom + 8;
    if (left + dropRect.width > window.innerWidth - 8) left = window.innerWidth - dropRect.width - 8;
    if (left < 8) left = 8;
    if (top + dropRect.height > window.innerHeight - 8) top = btnRect.top - dropRect.height - 8;
    if (top < 8) top = 8;
    el.paperVersionDropdown.style.left = left + "px";
    el.paperVersionDropdown.style.top = top + "px";
  });
}

function closePaperVersionDropdown() {
  el.paperVersionDropdown.classList.remove("open");
  el.paperVersionBtn.classList.remove("open");
}

function togglePaperVersionDropdown(e) {
  e.stopPropagation();
  if (el.paperVersionDropdown.classList.contains("open")) {
    closePaperVersionDropdown();
    closeJavaVersionDropdown();
  } else {
    openPaperVersionDropdown();
    if (!paperVersions.length && !paperLoading) loadPaperVersions();
  }
}

function selectPaperVersion(version) {
  selectedPaperVersion = version;
  el.paperVersionBtnLabel.textContent = version;
  renderPaperVersionList();
  closePaperVersionDropdown();
  closeJavaVersionDropdown();
}

function getInstalledPaperVersion() {
  const text = el.coreInfoVersion ? el.coreInfoVersion.textContent : "";
  return text && text !== "—" ? text : "";
}

function renderPaperVersionList() {
  el.paperVersionList.innerHTML = "";

  if (paperLoading) {
    const loading = document.createElement("div");
    loading.className = "paper-version-empty";
    loading.textContent = "Завантаження версій...";
    el.paperVersionList.appendChild(loading);
    return;
  }

  if (!paperVersions.length) {
    const empty = document.createElement("div");
    empty.className = "paper-version-empty";
    empty.textContent = paperLoadError || "Немає доступних версій";
    el.paperVersionList.appendChild(empty);

    const retry = document.createElement("div");
    retry.className = "paper-version-retry-btn";
    retry.textContent = "↻ Спробувати ще раз";
    retry.addEventListener("click", (e) => {
      e.stopPropagation();
      loadPaperVersions();
    });
    el.paperVersionList.appendChild(retry);
    return;
  }

  const installed = getInstalledPaperVersion();
  const grid = document.createElement("div");
  grid.className = "paper-version-grid";
  paperVersions.forEach((version) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "paper-version-item";
    if (version === selectedPaperVersion) item.classList.add("selected");
    if (version === installed) item.classList.add("installed");
    item.textContent = version;
    item.title = version === installed ? `${version} — встановлено зараз` : version;
    item.addEventListener("click", () => selectPaperVersion(version));
    grid.appendChild(item);
  });
  el.paperVersionList.appendChild(grid);
}

async function loadPaperVersions() {
  if (!el.paperVersionBtn || paperLoading) return;
  paperLoading = true;
  paperLoadError = "";
  el.paperVersionBtnLabel.textContent = "Завантаження...";
  if (el.paperVersionDropdown.classList.contains("open")) renderPaperVersionList();
  try {
    const result = await window.pywebview.api.list_paper_versions();
    if (!result || !result.success || !result.versions || !result.versions.length) {
      paperVersions = [];
      paperLoadError = (result && result.message) || "Не вдалося отримати версії Paper.";
      el.paperVersionBtnLabel.textContent = "Немає доступу";
      return;
    }
    paperVersions = result.versions;
    selectedPaperVersion = paperVersions[0];
    el.paperVersionBtnLabel.textContent = selectedPaperVersion;
  } catch (e) {
    paperVersions = [];
    paperLoadError = "Помилка звʼязку з API Paper.";
    el.paperVersionBtnLabel.textContent = "Помилка завантаження";
  } finally {
    paperLoading = false;
    renderPaperVersionList();
  }
}

async function browsePaperInstallDir() {
  try {
    const result = await window.pywebview.api.browse_install_dir();
    if (result && result.dirPath) {
      paperInstallDir = result.dirPath;
      if (el.paperBrowseDirBtn) el.paperBrowseDirBtn.title = paperInstallDir;
    }
  } catch (e) {
    /* користувач закрив діалог або сталася помилка — ігноруємо */
  }
}

let installHintTimer = null;

function setInstallHint(message, type, autoHideMs) {
  if (!el.installStatusHint) return;
  if (installHintTimer) {
    clearTimeout(installHintTimer);
    installHintTimer = null;
  }
  el.installStatusHint.textContent = message || "";
  el.installStatusHint.title = message || "";
  el.installStatusHint.className = "menubar-hint" + (type ? ` hint-${type}` : "");
  if (autoHideMs) {
    installHintTimer = setTimeout(() => {
      el.installStatusHint.textContent = "";
      el.installStatusHint.className = "menubar-hint";
      installHintTimer = null;
    }, autoHideMs);
  }
}

let javaVersions = [];
let selectedJavaVersion = "";
let javaLoadError = "";
let javaLoading = false;

function openJavaVersionDropdown() {
  closeSymbolsDropdown();
  closePlaceholdersDropdown();
  closeInstructionsDropdown();
  closePaperVersionDropdown();
  renderJavaVersionList();
  el.javaVersionDropdown.classList.add("open");
  el.javaVersionBtn.classList.add("open");

  const btnRect = el.javaVersionBtn.getBoundingClientRect();
  el.javaVersionDropdown.style.left = "0px";
  el.javaVersionDropdown.style.top = "0px";

  requestAnimationFrame(() => {
    const dropRect = el.javaVersionDropdown.getBoundingClientRect();
    let left = btnRect.left;
    let top = btnRect.bottom + 8;
    if (left + dropRect.width > window.innerWidth - 8) left = window.innerWidth - dropRect.width - 8;
    if (left < 8) left = 8;
    if (top + dropRect.height > window.innerHeight - 8) top = btnRect.top - dropRect.height - 8;
    if (top < 8) top = 8;
    el.javaVersionDropdown.style.left = left + "px";
    el.javaVersionDropdown.style.top = top + "px";
  });
}

function closeJavaVersionDropdown() {
  if (!el.javaVersionDropdown) return;
  el.javaVersionDropdown.classList.remove("open");
  el.javaVersionBtn.classList.remove("open");
}

function toggleJavaVersionDropdown(e) {
  e.stopPropagation();
  if (el.javaVersionDropdown.classList.contains("open")) {
    closeJavaVersionDropdown();
  } else {
    openJavaVersionDropdown();
    if (!javaVersions.length && !javaLoading) loadJavaVersions();
  }
}

function selectJavaVersion(version) {
  selectedJavaVersion = version;
  el.javaVersionBtnLabel.textContent = version;
  renderJavaVersionList();
  closeJavaVersionDropdown();
}

function getInstalledJavaMajor() {
  const text = el.coreInfoJava ? el.coreInfoJava.textContent : "";
  if (!text || text === "—") return "";
  const match = text.match(/\d+/);
  return match ? match[0] : "";
}

function renderJavaVersionList() {
  el.javaVersionList.innerHTML = "";

  if (javaLoading) {
    const loading = document.createElement("div");
    loading.className = "paper-version-empty";
    loading.textContent = "Завантаження версій...";
    el.javaVersionList.appendChild(loading);
    return;
  }

  if (!javaVersions.length) {
    const empty = document.createElement("div");
    empty.className = "paper-version-empty";
    empty.textContent = javaLoadError || "Немає доступних версій";
    el.javaVersionList.appendChild(empty);

    const retry = document.createElement("div");
    retry.className = "paper-version-retry-btn";
    retry.textContent = "↻ Спробувати ще раз";
    retry.addEventListener("click", (e) => {
      e.stopPropagation();
      loadJavaVersions();
    });
    el.javaVersionList.appendChild(retry);
    return;
  }

  const installedMajor = getInstalledJavaMajor();
  const grid = document.createElement("div");
  grid.className = "paper-version-grid";
  javaVersions.forEach((version) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "paper-version-item";
    if (version === selectedJavaVersion) item.classList.add("selected");
    if (version === installedMajor) item.classList.add("installed");
    item.textContent = version;
    item.title = version === installedMajor ? `Java ${version} — використовується зараз` : `Java ${version}`;
    item.addEventListener("click", () => selectJavaVersion(version));
    grid.appendChild(item);
  });
  el.javaVersionList.appendChild(grid);
}

async function loadJavaVersions() {
  if (!el.javaVersionBtn || javaLoading) return;
  javaLoading = true;
  javaLoadError = "";
  el.javaVersionBtnLabel.textContent = "Завантаження...";
  if (el.javaVersionDropdown.classList.contains("open")) renderJavaVersionList();
  try {
    const result = await window.pywebview.api.list_java_versions();
    if (!result || !result.success || !result.versions || !result.versions.length) {
      javaVersions = [];
      javaLoadError = (result && result.message) || "Не вдалося отримати версії Java.";
      el.javaVersionBtnLabel.textContent = "Немає доступу";
      return;
    }
    javaVersions = result.versions;
    selectedJavaVersion = javaVersions[0];
    el.javaVersionBtnLabel.textContent = selectedJavaVersion;
  } catch (e) {
    javaVersions = [];
    javaLoadError = "Помилка звʼязку з API Adoptium.";
    el.javaVersionBtnLabel.textContent = "Помилка завантаження";
  } finally {
    javaLoading = false;
    renderJavaVersionList();
  }
}

async function installAll() {
  const paperVersion = selectedPaperVersion;
  const javaVersion = selectedJavaVersion;
  if (!paperVersion && !javaVersion) return;
  if (serverRunning) {
    alert("Спочатку зупиніть сервер, а потім оновлюйте ядро чи Java.");
    return;
  }

  el.installAllBtn.disabled = true;
  const doneParts = [];
  const errorParts = [];
  let shouldAutoStart = false;

  try {
    if (paperVersion) {
      setInstallHint(`Завантаження Paper ${paperVersion}...`, null);
      const targetDir = paperInstallDir
        ? paperInstallDir
        : el.jarPathInput.value.trim()
        ? el.jarPathInput.value.trim().replace(/[^/\\]*$/, "")
        : "";
      const result = await window.pywebview.api.download_paper_core(paperVersion, targetDir || null);
      if (result && result.success) {
        el.jarPathInput.value = result.jarPath;
        paperInstallDir = result.jarPath.replace(/[^/\\]*$/, "").replace(/[/\\]$/, "");
        if (el.paperBrowseDirBtn) el.paperBrowseDirBtn.title = paperInstallDir;
        updateCoreInfo({ version: result.jarVersion || "", jarName: result.jarName || "" });
        await populateFileTree();
        await refreshPluginCommands();
        doneParts.push(`Paper ${result.version} (build ${result.build})`);
        if (!serverRunning) shouldAutoStart = true;
      } else {
        errorParts.push((result && result.message) || "Не вдалося завантажити ядро Paper.");
      }
    }

    if (javaVersion) {
      setInstallHint(`Завантаження Java ${javaVersion}...`, null);
      const result = await window.pywebview.api.download_java_runtime(javaVersion);
      if (result && result.success) {
        updateCoreInfo({ java: result.javaVersion || "" });
        doneParts.push(`Java ${result.version}`);
      } else {
        errorParts.push((result && result.message) || "Не вдалося завантажити Java.");
      }
    }

    if (errorParts.length) {
      setInstallHint(errorParts.join(" "), "error");
    } else if (doneParts.length) {
      setInstallHint(`Встановлено: ${doneParts.join(", ")}.`, "ok", 5000);
    }
  } finally {
    el.installAllBtn.disabled = false;
  }

  if (shouldAutoStart) {
    await startServer();
  }
}

async function browseJar() {
  const result = await window.pywebview.api.browse_jar();
  if (!result) return;
  el.jarPathInput.value = result.jarPath;
  updateCoreInfo({ version: result.jarVersion || "", jarName: result.jarName || "" });
  await populateFileTree();
  await refreshPluginCommands();
}

const RAM_GB_STORAGE_KEY = "mcServerManager.ramGb";
let ramSliderMaxGb = 8;

function formatGb(gb) {
  return (Math.round(gb * 10) / 10).toString().replace(".0", "") + " ГБ";
}

function currentRamMb() {
  if (!el.ramSlider) return 4096;
  return Math.round(parseFloat(el.ramSlider.value) * 1024);
}

function updateRamSliderLabel() {
  if (!el.ramSlider || !el.ramSliderValue) return;
  el.ramSliderValue.textContent = formatGb(parseFloat(el.ramSlider.value));
}

function initRamSlider(totalRamMb, savedRamMb) {
  if (!el.ramSlider) return;
  const totalGb = (totalRamMb || 8192) / 1024;
  ramSliderMaxGb = Math.max(2, Math.floor(totalGb - 1));
  el.ramSlider.min = "1";
  el.ramSlider.max = String(ramSliderMaxGb);
  el.ramSlider.step = "0.5";

  let initialGb = savedRamMb ? savedRamMb / 1024 : 4;
  const stored = parseFloat(localStorage.getItem(RAM_GB_STORAGE_KEY));
  if (!Number.isNaN(stored) && stored > 0) initialGb = stored;
  initialGb = Math.min(Math.max(initialGb, 1), ramSliderMaxGb);

  el.ramSlider.value = String(initialGb);
  if (el.ramSliderMin) el.ramSliderMin.textContent = "1 ГБ";
  if (el.ramSliderMax) el.ramSliderMax.textContent = formatGb(ramSliderMaxGb);
  updateRamSliderLabel();

  el.ramSlider.addEventListener("input", () => {
    updateRamSliderLabel();
    try {
      localStorage.setItem(RAM_GB_STORAGE_KEY, el.ramSlider.value);
    } catch (e) {
      /* ignore */
    }
  });
}

async function startServer() {
  const jarPath = el.jarPathInput.value.trim();
  const result = await window.pywebview.api.start_server(jarPath, currentRamMb());
  if (!result.success) {
    alert(result.message || "Не вдалося запустити сервер.");
    return;
  }
  setRunningUI(true);
  updateCoreInfo({ version: result.jarVersion || "", jarName: result.jarName || "" });
  startUptimeTimer(result.startedAt);
  await populateFileTree();
  await refreshPluginCommands();
}

async function restartServer() {
  const result = await window.pywebview.api.restart_server();
  if (!result.success) {
    alert(result.message || "Не вдалося перезапустити сервер.");
  }
}

async function stopServer() {
  const result = await window.pywebview.api.stop_server();
  if (!result.success) {
    alert(result.message || "Сервер зараз не запущено.");
    return;
  }
  el.stopBtn.disabled = true;
}

const COMMAND_HISTORY_KEY = "mcServerManager.commandHistory";
const COMMAND_HISTORY_MAX = 50;
let commandHistory = [];
try {
  const stored = JSON.parse(localStorage.getItem(COMMAND_HISTORY_KEY) || "[]");
  if (Array.isArray(stored)) commandHistory = stored.slice(0, COMMAND_HISTORY_MAX);
} catch (e) {
  commandHistory = [];
}
let historyIndex = -1;
let historyDraft = "";

function pushCommandHistory(cmd) {
  commandHistory = commandHistory.filter((c) => c !== cmd);
  commandHistory.unshift(cmd);
  if (commandHistory.length > COMMAND_HISTORY_MAX) commandHistory.length = COMMAND_HISTORY_MAX;
  historyIndex = -1;
  historyDraft = "";
  try {
    localStorage.setItem(COMMAND_HISTORY_KEY, JSON.stringify(commandHistory));
  } catch (e) {
    /* ignore */
  }
}

function navigateCommandHistory(direction) {
  if (!commandHistory.length) return;
  if (historyIndex === -1 && direction === -1) {
    historyDraft = el.commandInput.value;
  }
  let nextIndex = historyIndex + (direction === -1 ? 1 : -1);
  if (nextIndex < -1) nextIndex = -1;
  if (nextIndex >= commandHistory.length) nextIndex = commandHistory.length - 1;
  historyIndex = nextIndex;
  el.commandInput.value = historyIndex === -1 ? historyDraft : commandHistory[historyIndex];
  const pos = el.commandInput.value.length;
  el.commandInput.setSelectionRange(pos, pos);
}

async function sendCommand() {
  const text = el.commandInput.value.trim();
  if (!text) return;
  const result = await window.pywebview.api.send_command(text);
  if (result && result.success) {
    pushCommandHistory(text);
    el.commandInput.value = "";
    hideCommandSuggestions();
  } else if (result && result.message) {
    alert(result.message);
  }
}

const MC_COMMANDS = [
  "advancement", "attribute", "ban", "ban-ip", "banlist", "bossbar", "clear",
  "clone", "damage", "data", "datapack", "debug", "defaultgamemode", "deop",
  "difficulty", "effect", "enchant", "execute", "experience", "fill",
  "fillbiome", "forceload", "function", "gamemode", "gamerule", "give",
  "help", "item", "kick", "kill", "list", "locate", "loot", "me", "msg",
  "op", "pardon", "pardon-ip", "particle", "perf", "place", "playsound",
  "publish", "random", "recipe", "reload", "ride", "save-all", "save-off",
  "save-on", "say", "schedule", "scoreboard", "seed", "setblock",
  "setidletimeout", "setworldspawn", "spawnpoint", "spectate",
  "spreadplayers", "stop", "stopsound", "summon", "tag", "team", "teammsg",
  "teleport", "tell", "tellraw", "time", "title", "tm", "tp", "trigger",
  "w", "weather", "whitelist", "worldborder", "xp",
];

const TARGET_SELECTORS = ["@a", "@p", "@r", "@s", "@e"];
const TARGET_COMMANDS = new Set([
  "attribute", "ban", "clear", "damage", "data", "deop", "effect",
  "enchant", "execute", "give", "kick", "kill", "op", "pardon", "ride",
  "spectate", "spreadplayers", "tag", "teammsg", "teleport", "tell",
  "tellraw", "title", "tm", "tp", "w", "xp",
]);

const COMMAND_ARGS = {
  gamemode: ["survival", "creative", "adventure", "spectator"],
  defaultgamemode: ["survival", "creative", "adventure", "spectator"],
  difficulty: ["peaceful", "easy", "normal", "hard"],
  weather: ["clear", "rain", "thunder"],
  whitelist: ["on", "off", "list", "add", "remove", "reload"],
  "save-all": ["flush"],
  debug: ["start", "stop", "function"],
  datapack: ["enable", "disable", "list"],
  time: {
    set: ["day", "night", "noon", "midnight", "0", "1000", "6000", "12000", "18000"],
    add: ["1000", "6000", "12000"],
    query: ["day", "daytime", "gametime"],
  },
  effect: {
    give: TARGET_SELECTORS,
    clear: TARGET_SELECTORS,
  },
  gamerule: [
    "announceAdvancements", "commandBlockOutput", "disableRaids",
    "doDaylightCycle", "doEntityDrops", "doFireTick", "doImmediateRespawn",
    "doInsomnia", "doLimitedCrafting", "doMobLoot", "doMobSpawning",
    "doPatrolSpawning", "doTileDrops", "doTraderSpawning", "doWeatherCycle",
    "drowningDamage", "fallDamage", "fireDamage", "forgiveDeadPlayers",
    "keepInventory", "logAdminCommands", "maxCommandChainLength",
    "maxEntityCramming", "mobGriefing", "naturalRegeneration",
    "playersSleepingPercentage", "randomTickSpeed", "reducedDebugInfo",
    "sendCommandFeedback", "showDeathMessages", "spawnRadius",
    "spectatorsGenerateChunks", "universalAnger",
  ],
};

let tabCompletion = null;
let suppressInputHandler = false;
let pluginCommands = [];
let onlinePlayers = [];

async function refreshPluginCommands() {
  try {
    const result = await window.pywebview.api.list_plugin_commands();
    pluginCommands = (result && result.commands) || [];
  } catch (e) {
    pluginCommands = [];
  }
}
window.onPlayersChanged = function (list) {
  onlinePlayers = Array.isArray(list) ? list : [];
};

function getCommandSuggestions(value) {
  const hasSlash = value.startsWith("/");
  const withoutSlash = hasSlash ? value.slice(1) : value;
  const parts = withoutSlash.length ? withoutSlash.split(/\s+/) : [""];
  const lastIndex = parts.length - 1;
  const lastPart = parts[lastIndex] || "";

  let candidates = [];
  if (lastIndex === 0) {
    candidates = MC_COMMANDS.concat(pluginCommands.filter((c) => !MC_COMMANDS.includes(c)));
  } else {
    const cmd = parts[0].toLowerCase();
    const spec = COMMAND_ARGS[cmd];
    if (spec) {
      if (Array.isArray(spec)) {
        if (lastIndex === 1) candidates = spec;
      } else {
        if (lastIndex === 1) {
          candidates = Object.keys(spec);
        } else if (lastIndex === 2) {
          const sub = spec[(parts[1] || "").toLowerCase()];
          if (Array.isArray(sub)) candidates = sub;
        }
      }
    }
    if (!candidates.length && lastIndex === 1 && TARGET_COMMANDS.has(cmd)) {
      candidates = onlinePlayers.concat(TARGET_SELECTORS);
    }
  }

  const filtered = candidates.filter((c) => c.toLowerCase().startsWith(lastPart.toLowerCase()));
  return { candidates: filtered, parts, lastIndex, hasSlash };
}

function applyTabCompletion() {
  const { candidates, index, parts, lastIndex, hasSlash } = tabCompletion;
  const chosen = candidates[index];
  const newParts = parts.slice(0, lastIndex);
  newParts.push(chosen);
  const trailingSpace = candidates.length === 1 ? " " : "";
  const newValue = (hasSlash ? "/" : "") + newParts.join(" ") + trailingSpace;
  suppressInputHandler = true;
  el.commandInput.value = newValue;
  const cursorPos = newValue.length;
  el.commandInput.setSelectionRange(cursorPos, cursorPos);
}

function handleTabCompletion(reverse) {
  if (!tabCompletion) {
    const { candidates, parts, lastIndex, hasSlash } = getCommandSuggestions(el.commandInput.value);
    if (!candidates.length) return;
    candidates.sort();
    tabCompletion = { candidates, index: 0, parts, lastIndex, hasSlash };
  } else {
    const count = tabCompletion.candidates.length;
    tabCompletion.index = (tabCompletion.index + (reverse ? -1 : 1) + count) % count;
  }
  applyTabCompletion();
  renderCommandSuggestions();
}

function showLiveSuggestions() {
  const value = el.commandInput.value;
  if (!value) {
    hideCommandSuggestions();
    return;
  }
  const { candidates, parts, lastIndex, hasSlash } = getCommandSuggestions(value);
  if (!candidates.length) {
    hideCommandSuggestions();
    return;
  }
  candidates.sort();
  tabCompletion = { candidates, index: 0, parts, lastIndex, hasSlash };
  renderCommandSuggestions();
}

function renderCommandSuggestions() {
  if (!tabCompletion || !tabCompletion.candidates.length) {
    hideCommandSuggestions();
    return;
  }
  const { candidates, index, parts, lastIndex } = tabCompletion;
  const lastPart = (parts[lastIndex] || "").toLowerCase();
  const itemsHtml = candidates
    .map((candidate, i) => {
      const matchLen = candidate.toLowerCase().startsWith(lastPart) ? lastPart.length : 0;
      const head = candidate.slice(0, matchLen);
      const tail = candidate.slice(matchLen);
      const activeClass = i === index ? " active" : "";
      return (
        `<div class="command-suggestion-item${activeClass}" data-index="${i}">` +
        `<span><span class="cs-match">${escapeHtml(head)}</span>${escapeHtml(tail)}</span>` +
        `</div>`
      );
    })
    .join("");
  el.commandSuggestions.innerHTML =
    itemsHtml + `<div class="command-suggestions-hint">Tab — підставити · ↑↓ — вибір · Esc — закрити</div>`;
  el.commandSuggestions.classList.add("is-open");

  el.commandSuggestions.querySelectorAll(".command-suggestion-item").forEach((node) => {
    node.addEventListener("mousedown", (e) => {
      e.preventDefault();
      tabCompletion.index = Number(node.dataset.index);
      applyTabCompletion();
      hideCommandSuggestions();
      tabCompletion = null;
      el.commandInput.focus();
    });
  });
}

function hideCommandSuggestions() {
  el.commandSuggestions.classList.remove("is-open");
  el.commandSuggestions.innerHTML = "";
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function iconForFolder() {
  return `<span class="ico" data-icon="folder"></span>`;
}
function iconForFile() {
  return `<span class="ico" data-icon="document"></span>`;
}

async function populateFileTree() {
  const data = await window.pywebview.api.list_current_dir();
  renderFileTree(data);
}

function renderFileTree(data) {
  el.fileTree.innerHTML = "";

  if (!data || !data.ready) {
    currentDirPath = null;
    currentDirReady = false;
    el.explorerPath.textContent = "Ядро не обрано";
    el.backBtn.disabled = true;
    el.addBtn.disabled = true;
    const row = document.createElement("div");
    row.className = "tree-row empty";
    row.textContent = "Спочатку оберіть ядро";
    el.fileTree.appendChild(row);
    return;
  }

  currentDirPath = data.path;
  currentDirReady = true;
  el.explorerPath.textContent = data.path;
  el.backBtn.disabled = !!data.atRoot;
  el.addBtn.disabled = false;

  if (data.error) {
    alert("Не вдалося прочитати папку:\n" + data.error);
    return;
  }

  const folders = data.folders || [];
  const files = data.files || [];

  folders.forEach((f) => {
    const row = document.createElement("div");
    row.className = "tree-row";
    row.dataset.path = f.path;
    row.dataset.type = "folder";
    row.dataset.name = f.name;
    row.innerHTML = `${iconForFolder()}<span class="tree-name">${escapeHtml(f.name)}</span>`;
    row.addEventListener("dblclick", () => navigateInto(f.path));
    el.fileTree.appendChild(row);
    renderIconsIn(row);
  });

  files.forEach((f) => {
    const row = document.createElement("div");
    row.className = "tree-row";
    row.dataset.path = f.path;
    row.dataset.type = "file";
    row.dataset.name = f.name;
    row.innerHTML = `${iconForFile()}<span class="tree-name">${escapeHtml(f.name)}</span><span class="tree-size">${escapeHtml(f.size)}</span>`;
    row.addEventListener("click", () => openFileInEditor(f.path));
    el.fileTree.appendChild(row);
    renderIconsIn(row);
  });

  if (!folders.length && !files.length) {
    const row = document.createElement("div");
    row.className = "tree-row empty";
    row.textContent = "Порожньо";
    el.fileTree.appendChild(row);
  }

  highlightActiveInTree();
}

function updateLineNumbers() {
  const lineCount = el.editorBox.value.split("\n").length;
  let out = "";
  for (let i = 1; i <= lineCount; i++) out += i + "\n";
  el.lineNumbers.textContent = out;
}

function syncGutterScroll() {
  el.lineNumbers.scrollTop = el.editorBox.scrollTop;
  el.editorHighlight.parentElement.scrollTop = el.editorBox.scrollTop;
  el.editorHighlight.parentElement.scrollLeft = el.editorBox.scrollLeft;
}

function highlightLine(line) {
  const commentMatch = line.match(/^(\s*)([#;].*)$/);
  if (commentMatch) {
    return commentMatch[1] + `<span class="tok-comment">${escapeHtml(commentMatch[2])}</span>`;
  }

  const sectionMatch = line.match(/^(\s*)(\[[^\]]*\])(\s*)$/);
  if (sectionMatch) {
    return escapeHtml(sectionMatch[1]) + `<span class="tok-section">${escapeHtml(sectionMatch[2])}</span>` + escapeHtml(sectionMatch[3]);
  }

  let rest = line;
  let prefix = "";

  const keyMatch = line.match(/^(\s*(?:-\s+)?)("[^"]*"|'[^']*'|[\w.\-]+)(\s*)(:|=)(?!=)/);
  if (keyMatch) {
    const [full, lead, key, spacing, sep] = keyMatch;
    prefix = escapeHtml(lead) + `<span class="tok-key">${escapeHtml(key)}</span>` + escapeHtml(spacing) + `<span class="tok-punct">${escapeHtml(sep)}</span>`;
    rest = line.slice(full.length);
  }

  const tokenRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b-?\d+(?:\.\d+)?\b)|(\btrue\b|\bfalse\b|\byes\b|\bno\b|\bnull\b|\bnil\b)|([{}\[\],])/gi;

  let output = "";
  let lastIndex = 0;
  let m;
  while ((m = tokenRegex.exec(rest)) !== null) {
    output += escapeHtml(rest.slice(lastIndex, m.index));
    if (m[1]) output += `<span class="tok-string">${escapeHtml(m[1])}</span>`;
    else if (m[2]) output += `<span class="tok-number">${escapeHtml(m[2])}</span>`;
    else if (m[3]) output += `<span class="tok-bool">${escapeHtml(m[3])}</span>`;
    else if (m[4]) output += `<span class="tok-punct">${escapeHtml(m[4])}</span>`;
    lastIndex = tokenRegex.lastIndex;
  }
  output += escapeHtml(rest.slice(lastIndex));

  return prefix + output;
}

function updateHighlight() {
  const lines = el.editorBox.value.split("\n").map(highlightLine);
  el.editorHighlight.innerHTML = lines.join("\n") + "\n";
}

function showPlainHighlight(text) {
  el.editorHighlight.innerHTML = escapeHtml(text);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}

async function navigateInto(path) {
  const data = await window.pywebview.api.navigate_into(path);
  renderFileTree(data);
}

async function navigateUp() {
  const data = await window.pywebview.api.navigate_up();
  renderFileTree(data);
}

async function refreshFiles() {
  const data = await window.pywebview.api.refresh_files();
  renderFileTree(data);
  await refreshPluginCommands();
}

function findTab(path) {
  return openTabs.find((tab) => tab.path === path);
}

function highlightActiveInTree() {
  el.fileTree.querySelectorAll(".tree-row[data-path]").forEach((row) => {
    row.classList.toggle("selected", row.dataset.path === activeTabPath);
  });
}

function renderTabs() {
  el.editorTabs.innerHTML = "";

  if (openTabs.length === 0) {
    const emptyEl = document.createElement("div");
    emptyEl.className = "editor-tab empty";
    const nameEl = document.createElement("span");
    nameEl.className = "tab-name";
    nameEl.textContent = "Немає відкритих файлів";
    emptyEl.appendChild(nameEl);
    el.editorTabs.appendChild(emptyEl);
    return;
  }

  openTabs.forEach((tab) => {
    const tabEl = document.createElement("div");
    tabEl.className = "editor-tab" + (tab.path === activeTabPath ? " active" : "");
    tabEl.title = tab.path;
    tabEl.addEventListener("click", () => {
      if (tab.path !== activeTabPath) switchToTab(tab.path);
    });

    const nameEl = document.createElement("span");
    nameEl.className = "tab-name";
    nameEl.textContent = tab.name;
    tabEl.appendChild(nameEl);

    if (tab.dirty) {
      const dotEl = document.createElement("span");
      dotEl.className = "tab-dot";
      tabEl.appendChild(dotEl);
    }

    const closeEl = document.createElement("button");
    closeEl.type = "button";
    closeEl.className = "tab-close";
    closeEl.textContent = "×";
    closeEl.addEventListener("click", (e) => {
      e.stopPropagation();
      closeTab(tab.path);
    });
    tabEl.appendChild(closeEl);

    el.editorTabs.appendChild(tabEl);
  });
}

function switchToTab(path) {
  const tab = findTab(path);
  if (!tab) return;

  activeTabPath = path;
  el.editorBox.value = tab.content;
  el.editorBox.disabled = false;
  el.saveBtn.disabled = false;
  updateLineNumbers();
  updateHighlight();
  el.editorBox.scrollTop = 0;
  el.editorBox.scrollLeft = 0;
  syncGutterScroll();
  renderTabs();
  highlightActiveInTree();
}

function clearEditor() {
  activeTabPath = null;
  el.editorBox.value = "";
  el.editorBox.disabled = true;
  el.saveBtn.disabled = true;
  updateLineNumbers();
  showPlainHighlight("");
  renderTabs();
  highlightActiveInTree();
}

function closeTab(path) {
  const index = openTabs.findIndex((tab) => tab.path === path);
  if (index === -1) return;

  const tab = openTabs[index];
  if (tab.dirty) {
    const proceed = confirm(`Файл «${tab.name}» має незбережені зміни. Закрити без збереження?`);
    if (!proceed) return;
  }

  openTabs.splice(index, 1);

  if (activeTabPath !== path) {
    renderTabs();
    return;
  }

  if (openTabs.length > 0) {
    const nextIndex = Math.min(index, openTabs.length - 1);
    switchToTab(openTabs[nextIndex].path);
  } else {
    clearEditor();
  }
}

async function openFileInEditor(path) {
  const existing = findTab(path);
  if (existing) {
    switchToTab(path);
    return;
  }

  const result = await window.pywebview.api.load_file(path);
  if (!result.success) {
    alert(result.message || "Не вдалося відкрити файл.");
    return;
  }

  openTabs.push({
    path,
    name: result.name,
    content: result.content,
    savedContent: result.content,
    dirty: false,
  });
  switchToTab(path);
}

async function saveCurrentFile() {
  if (!activeTabPath) {
    alert("Немає відкритого текстового файлу для збереження.");
    return;
  }

  const tab = findTab(activeTabPath);
  const content = el.editorBox.value;
  const result = await window.pywebview.api.save_file(activeTabPath, content);
  if (!result.success) {
    alert(result.message || "Не вдалося зберегти файл.");
    return;
  }

  if (tab) {
    tab.content = content;
    tab.savedContent = content;
    tab.dirty = false;
  }
  renderTabs();
  await populateFileTree();
}

function hideContextMenu() {
  el.contextMenu.style.display = "none";
  el.contextMenu.innerHTML = "";
  delete el.contextMenu.dataset.anchor;
}

function showContextMenu(x, y, items) {
  el.contextMenu.innerHTML = "";

  items.forEach((item) => {
    if (item.separator) {
      const sep = document.createElement("div");
      sep.className = "context-menu-separator";
      el.contextMenu.appendChild(sep);
      return;
    }
    const itemEl = document.createElement("div");
    itemEl.className = "context-menu-item" + (item.danger ? " danger" : "");
    itemEl.textContent = item.label;
    itemEl.addEventListener("click", (e) => {
      e.stopPropagation();
      hideContextMenu();
      item.action();
    });
    el.contextMenu.appendChild(itemEl);
  });

  el.contextMenu.style.left = x + "px";
  el.contextMenu.style.top = y + "px";
  el.contextMenu.style.display = "block";

  requestAnimationFrame(() => {
    const rect = el.contextMenu.getBoundingClientRect();
    let left = x;
    let top = y;
    if (rect.right > window.innerWidth) left = Math.max(8, window.innerWidth - rect.width - 8);
    if (rect.bottom > window.innerHeight) top = Math.max(8, window.innerHeight - rect.height - 8);
    el.contextMenu.style.left = left + "px";
    el.contextMenu.style.top = top + "px";
  });
}

function handleFileTreeContextMenu(e) {
  if (!el.fileTree.contains(e.target)) return;
  e.preventDefault();
  e.stopPropagation();
  hideContextMenu();
  if (!currentDirReady) return;

  const row = e.target.closest(".tree-row[data-path]");

  if (row) {
    const path = row.dataset.path;
    const name = row.dataset.name;
    const type = row.dataset.type;

    if (type === "folder") {
      showContextMenu(e.clientX, e.clientY, [
        { label: "Перейменувати папку", action: () => renamePrompt(path, name, "folder") },
        { label: "Видалити папку", danger: true, action: () => deletePrompt(path, name, "folder") },
      ]);
    } else {
      showContextMenu(e.clientX, e.clientY, [
        { label: "Перейменувати файл", action: () => renamePrompt(path, name, "file") },
        { label: "Видалити файл", danger: true, action: () => deletePrompt(path, name, "file") },
      ]);
    }
    return;
  }

  showContextMenu(e.clientX, e.clientY, [
    { label: "Створити папку", action: createFolderPrompt },
    { label: "Створити файл", action: createFilePrompt },
  ]);
}

function toggleAddMenu() {
  const wasOpenForAdd = el.contextMenu.style.display === "block" && el.contextMenu.dataset.anchor === "addBtn";
  hideContextMenu();
  if (wasOpenForAdd || !currentDirReady) return;

  const rect = el.addBtn.getBoundingClientRect();
  showContextMenu(rect.left, rect.bottom + 6, [
    { label: "Створити папку", action: createFolderPrompt },
    { label: "Створити файл", action: createFilePrompt },
  ]);
  el.contextMenu.dataset.anchor = "addBtn";
}

function handleGlobalClick(e) {
  if (el.addBtn.contains(e.target)) {
    e.preventDefault();
    toggleAddMenu();
    return;
  }
  if (el.contextMenu.contains(e.target)) return;
  hideContextMenu();
}

async function createFolderPrompt() {
  if (!currentDirReady || !currentDirPath) return;
  const name = prompt("Назва нової папки:");
  if (!name || !name.trim()) return;

  const result = await window.pywebview.api.create_folder(currentDirPath, name.trim());
  if (!result.success) {
    alert(result.message || "Не вдалося створити папку.");
    return;
  }
  await populateFileTree();
}

async function createFilePrompt() {
  if (!currentDirReady || !currentDirPath) return;
  const name = prompt("Назва нового файлу (з розширенням, напр. config.yml):");
  if (!name || !name.trim()) return;

  const result = await window.pywebview.api.create_file(currentDirPath, name.trim());
  if (!result.success) {
    alert(result.message || "Не вдалося створити файл.");
    return;
  }
  await populateFileTree();
}

async function renamePrompt(path, oldName, type) {
  const newName = prompt("Нова назва:", oldName);
  if (!newName || !newName.trim() || newName.trim() === oldName) return;

  const result = await window.pywebview.api.rename_entry(path, newName.trim());
  if (!result.success) {
    alert(result.message || "Не вдалося перейменувати.");
    return;
  }

  if (type === "file") {
    updateTabPathOnRename(path, result.newPath, result.newName);
  } else {
    updateTabPathsUnderRenamedFolder(path, result.newPath);
  }

  await populateFileTree();
}

async function deletePrompt(path, name, type) {
  const label = type === "folder" ? "папку" : "файл";
  const proceed = confirm(`Видалити ${label} «${name}»? Цю дію неможливо скасувати.`);
  if (!proceed) return;

  const result = await window.pywebview.api.delete_entry(path);
  if (!result.success) {
    alert(result.message || "Не вдалося видалити.");
    return;
  }

  if (type === "file") {
    closeTabSilently(path);
  } else {
    closeTabsUnderFolder(path);
  }

  await populateFileTree();
}

function pathIsUnder(path, folderPath) {
  const normalizedFolder = folderPath.replace(/[\\/]+$/, "");
  return path === normalizedFolder || path.startsWith(normalizedFolder + "\\") || path.startsWith(normalizedFolder + "/");
}

function closeTabSilently(path) {
  const index = openTabs.findIndex((tab) => tab.path === path);
  if (index === -1) return;

  openTabs.splice(index, 1);

  if (activeTabPath !== path) {
    renderTabs();
    return;
  }

  if (openTabs.length > 0) {
    const nextIndex = Math.min(index, openTabs.length - 1);
    switchToTab(openTabs[nextIndex].path);
  } else {
    clearEditor();
  }
}

function closeTabsUnderFolder(folderPath) {
  const affected = openTabs.filter((tab) => pathIsUnder(tab.path, folderPath));
  affected.forEach((tab) => closeTabSilently(tab.path));
}

function updateTabPathOnRename(oldPath, newPath, newName) {
  const tab = findTab(oldPath);
  if (!tab) return;

  tab.path = newPath;
  tab.name = newName;
  if (activeTabPath === oldPath) activeTabPath = newPath;

  renderTabs();
  highlightActiveInTree();
}

function updateTabPathsUnderRenamedFolder(oldFolderPath, newFolderPath) {
  const normalizedOld = oldFolderPath.replace(/[\\/]+$/, "");
  openTabs.forEach((tab) => {
    if (tab.path === normalizedOld) {
      if (activeTabPath === tab.path) activeTabPath = newFolderPath;
      tab.path = newFolderPath;
    } else if (pathIsUnder(tab.path, normalizedOld)) {
      const rest = tab.path.slice(normalizedOld.length);
      const updatedPath = newFolderPath + rest;
      if (activeTabPath === tab.path) activeTabPath = updatedPath;
      tab.path = updatedPath;
    }
  });
  renderTabs();
  highlightActiveInTree();
}

function bindEventListeners() {
  el.browseJarBtn.addEventListener("click", browseJar);
  el.jarPathInput.addEventListener("change", async () => {
    const path = el.jarPathInput.value.trim();
    if (!path) return;
    const result = await window.pywebview.api.set_jar_path(path);
    if (result && result.success) {
      updateCoreInfo({ version: result.jarVersion || "", jarName: result.jarName || "" });
      await populateFileTree();
      await refreshPluginCommands();
    }
  });
  if (el.paperVersionBtn) el.paperVersionBtn.addEventListener("click", togglePaperVersionDropdown);
  if (el.paperVersionDropdown) el.paperVersionDropdown.addEventListener("click", (e) => e.stopPropagation());
  if (el.paperBrowseDirBtn) el.paperBrowseDirBtn.addEventListener("click", browsePaperInstallDir);
  if (el.javaVersionBtn) el.javaVersionBtn.addEventListener("click", toggleJavaVersionDropdown);
  if (el.javaVersionDropdown) el.javaVersionDropdown.addEventListener("click", (e) => e.stopPropagation());
  if (el.installAllBtn) el.installAllBtn.addEventListener("click", installAll);
  el.startBtn.addEventListener("click", startServer);
  el.restartBtn.addEventListener("click", restartServer);
  el.stopBtn.addEventListener("click", stopServer);
  el.commandInput.addEventListener("input", () => {
    if (suppressInputHandler) {
      suppressInputHandler = false;
      return;
    }
    tabCompletion = null;
    historyIndex = -1;
    showLiveSuggestions();
  });
  el.commandInput.addEventListener("focus", () => {
    if (el.commandInput.value) showLiveSuggestions();
  });
  el.commandInput.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion(e.shiftKey);
      return;
    }
    if (e.key === "Enter") {
      if (tabCompletion && tabCompletion.candidates.length) {
        e.preventDefault();
        applyTabCompletion();
        hideCommandSuggestions();
        tabCompletion = null;
        return;
      }
      sendCommand();
      tabCompletion = null;
      hideCommandSuggestions();
      return;
    }
    if (e.key === "Escape") {
      hideCommandSuggestions();
      tabCompletion = null;
      return;
    }
    if (tabCompletion && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      e.preventDefault();
      const count = tabCompletion.candidates.length;
      tabCompletion.index = (tabCompletion.index + (e.key === "ArrowUp" ? -1 : 1) + count) % count;
      renderCommandSuggestions();
      return;
    }
    if (!tabCompletion && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      e.preventDefault();
      navigateCommandHistory(e.key === "ArrowUp" ? -1 : 1);
    }
  });
  el.commandInput.addEventListener("blur", () => {
    setTimeout(() => {
      hideCommandSuggestions();
      tabCompletion = null;
    }, 120);
  });
  el.saveBtn.addEventListener("click", saveCurrentFile);
  el.backBtn.addEventListener("click", navigateUp);
  el.refreshBtn.addEventListener("click", refreshFiles);
  el.symbolsBtn.addEventListener("click", toggleSymbolsDropdown);
  el.symbolsDropdown.addEventListener("click", (e) => e.stopPropagation());
  el.placeholdersBtn.addEventListener("click", togglePlaceholdersDropdown);
  el.placeholdersDropdown.addEventListener("click", (e) => e.stopPropagation());
  window.addEventListener("click", (e) => {
    if (!el.symbolsDropdown.contains(e.target) && e.target !== el.symbolsBtn && !el.symbolsBtn.contains(e.target)) {
      closeSymbolsDropdown();
    }
    if (!el.placeholdersDropdown.contains(e.target) && e.target !== el.placeholdersBtn && !el.placeholdersBtn.contains(e.target)) {
      closePlaceholdersDropdown();
    }
    if (
      el.paperVersionDropdown &&
      !el.paperVersionDropdown.contains(e.target) &&
      e.target !== el.paperVersionBtn &&
      !el.paperVersionBtn.contains(e.target)
    ) {
      closePaperVersionDropdown();
    }
    if (
      el.javaVersionDropdown &&
      !el.javaVersionDropdown.contains(e.target) &&
      e.target !== el.javaVersionBtn &&
      !el.javaVersionBtn.contains(e.target)
    ) {
      closeJavaVersionDropdown();
    }
  });
  el.editorBox.addEventListener("input", () => {
    updateLineNumbers();
    updateHighlight();
    if (activeTabPath) {
      const tab = findTab(activeTabPath);
      if (tab) {
        tab.content = el.editorBox.value;
        const wasDirty = tab.dirty;
        tab.dirty = tab.content !== tab.savedContent;
        if (tab.dirty !== wasDirty) renderTabs();
      }
    }
  });
  el.editorBox.addEventListener("scroll", syncGutterScroll);

  window.addEventListener("contextmenu", handleFileTreeContextMenu, true);
  window.addEventListener("click", handleGlobalClick, true);
  window.addEventListener("scroll", hideContextMenu, true);
  window.addEventListener("blur", hideContextMenu);
  window.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        hideContextMenu();
        closeSymbolsDropdown();
        closePlaceholdersDropdown();
        closePaperVersionDropdown();
        closeJavaVersionDropdown();
      }
      const isSaveShortcut =
        (e.ctrlKey || e.metaKey) &&
        !e.altKey &&
        (e.code === "KeyS" || (e.key && e.key.toLowerCase() === "s"));
      if (isSaveShortcut) {
        e.preventDefault();
        e.stopPropagation();
        if (activeTabPath) saveCurrentFile();
      }

      const isCloseTabShortcut =
        (e.ctrlKey || e.metaKey) &&
        !e.altKey &&
        (e.code === "KeyW" || (e.key && e.key.toLowerCase() === "w"));
      if (isCloseTabShortcut) {
        e.preventDefault();
        e.stopPropagation();
        if (activeTabPath) closeTab(activeTabPath);
      }
    },
    true
  );
}

renderIcons();
updateLineNumbers();
showPlainHighlight("");
renderTabs();
bindEventListeners();

function syncTopPanelsHeight() {
  const serverPanel = document.querySelector(".accent-server");
  const filesPanel = document.querySelector(".accent-files");
  if (!serverPanel || !filesPanel) return;
  const h = serverPanel.offsetHeight;
  if (h > 0) {
    filesPanel.style.height = h + "px";
    filesPanel.style.maxHeight = h + "px";
  }
}

syncTopPanelsHeight();
window.addEventListener("resize", syncTopPanelsHeight);

async function init() {
  const state = await window.pywebview.api.get_initial_state();
  el.jarPathInput.value = state.jarPath || "";
  setRunningUI(!!state.running);
  updateCoreInfo({
    version: state.serverVersion || state.jarVersion || "",
    java: state.javaVersion || "",
    jarName: state.jarName || "",
  });
  initRamSlider(state.totalRamMb, state.ramMb);
  if (el.ramSlider) el.ramSlider.disabled = !!state.running;
  if (state.running) {
    startUptimeTimer(state.startedAt);
  } else if (el.resUptimeLabel) {
    el.resUptimeLabel.textContent = "—";
  }

  await populateFileTree();
  await refreshPluginCommands();
  try {
    onlinePlayers = await window.pywebview.api.get_online_players();
  } catch (e) {
    onlinePlayers = [];
  }
  resetResourceLabels();
  loadPaperVersions();
  loadJavaVersions();
  setInstallHint("Оберіть версію ядра, Java, папку для зберігання ядра та натисніть «Встановити»", null);
  syncTopPanelsHeight();
}

window.addEventListener("pywebviewready", init);