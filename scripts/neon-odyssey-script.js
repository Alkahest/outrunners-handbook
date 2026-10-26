// Add a new Skill
Hooks.once("init", () => {
  CONFIG.DND5E.skills.com = {
    label: "Computers",
    ability: "int",
    fullKey: "computers", // Full key used in enrichers
    reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    icon: "…" // Icon used in favorites on new character sheet
  };
  CONFIG.DND5E.skills.tec = {
    label: "Technology",
    ability: "int",
    fullKey: "technology", // Full key used in enrichers
    reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    icon: "…" // Icon used in favorites on new character sheet
  };
});

// Update Tool Types
Hooks.once("init", () => {
  CONFIG.DND5E.toolTypes.art = "Crafter's Tools";
  CONFIG.DND5E.toolTypes.game = "Game Set";
  CONFIG.DND5E.toolTypes.music = "Musician's Instrument";
});

// Update Tool Proficiencies
Hooks.once("init", () => {
  CONFIG.DND5E.toolProficiencies.art = "Crafter's Tools";
  CONFIG.DND5E.toolProficiencies.game = "Game Set";
  CONFIG.DND5E.toolProficiencies.music = "Musician's Instrument";
});

// Updates Vehicles
Hooks.once("init", () => {
  delete CONFIG.DND5E.vehicleTypes.air;
  delete CONFIG.DND5E.vehicleTypes.land;
  delete CONFIG.DND5E.vehicleTypes.space;
  delete CONFIG.DND5E.vehicleTypes.water;
});
Hooks.once("init", () => {
  CONFIG.DND5E.vehicleTypes.mechlight = "Light Mech";
  CONFIG.DND5E.vehicleTypes.mechheavy = "Heavy Mech";
  CONFIG.DND5E.vehicleTypes.planetarylight = "Light Planetary";
  CONFIG.DND5E.vehicleTypes.planetaryheavy = "Heavy Planetary";
  CONFIG.DND5E.vehicleTypes.starfighterlight = "Light Starfighter";
  CONFIG.DND5E.vehicleTypes.starfighterstandard = "Standard Starfighter";
  CONFIG.DND5E.vehicleTypes.starfighterheavy = "Heavy Starfighter";
  CONFIG.DND5E.vehicleTypes.transportlight = "Light Transport";
  CONFIG.DND5E.vehicleTypes.transportheavy = "Heavy Transport";
  CONFIG.DND5E.vehicleTypes.capital = "Capital Ship";
});
// Updates Tools
Hooks.once("init", () => {
  delete CONFIG.DND5E.tools.alchemist;
  delete CONFIG.DND5E.tools.bagpipes;
  delete CONFIG.DND5E.tools.brewer;
  delete CONFIG.DND5E.tools.calligrapher;
  delete CONFIG.DND5E.tools.card;
  delete CONFIG.DND5E.tools.carpenter;
  delete CONFIG.DND5E.tools.cartographer;
  delete CONFIG.DND5E.tools.chess;
  delete CONFIG.DND5E.tools.cobbler;
  delete CONFIG.DND5E.tools.cook;
  delete CONFIG.DND5E.tools.dice;
  delete CONFIG.DND5E.tools.disg;
  delete CONFIG.DND5E.tools.drum;
  delete CONFIG.DND5E.tools.dulcimer;
  delete CONFIG.DND5E.tools.flute;
  delete CONFIG.DND5E.tools.forg;
  delete CONFIG.DND5E.tools.glassblower;
  delete CONFIG.DND5E.tools.herb;
  delete CONFIG.DND5E.tools.horn;
  delete CONFIG.DND5E.tools.jeweler;
  delete CONFIG.DND5E.tools.leatherworker;
  delete CONFIG.DND5E.tools.lute;
  delete CONFIG.DND5E.tools.lyre;
  delete CONFIG.DND5E.tools.mason;
  delete CONFIG.DND5E.tools.navg;
  delete CONFIG.DND5E.tools.painter;
  delete CONFIG.DND5E.tools.panflute;
  delete CONFIG.DND5E.tools.pois;
  delete CONFIG.DND5E.tools.potter;
  delete CONFIG.DND5E.tools.shawm;
  delete CONFIG.DND5E.tools.smith;
  delete CONFIG.DND5E.tools.thief;
  delete CONFIG.DND5E.tools.tinker;
  delete CONFIG.DND5E.tools.viol;
  delete CONFIG.DND5E.tools.weaver;
  delete CONFIG.DND5E.tools.woodcarver;
  delete CONFIG.DND5E.tools.air;
  delete CONFIG.DND5E.tools.land;
  delete CONFIG.DND5E.tools.space;
  delete CONFIG.DND5E.tools.water;
});

//Add Crafter's Tools
Hooks.once("init", () => {
  CONFIG.DND5E.tools.artist = {
    ability: "dex",
    id: "Compendium.outrunners-handbook.equipment.Item.ELyCaaPa9w7zPTyZ"
  };  
  CONFIG.DND5E.tools.brewing = {
    ability: "int",
    id: "Compendium.outrunners-handbook.equipment.Item.UttAwVsarq4ZC7LV"
  };    
  CONFIG.DND5E.tools.cooking = {
    ability: "wis",
    id: "Compendium.outrunners-handbook.equipment.Item.DPW6EHBP6XW8IPTE"
  };  
  CONFIG.DND5E.tools.chemist = {
    ability: "int",
    id: "Compendium.outrunners-handbook.equipment.Item.ROpAeMWKWUu6JHqV"
  };  
  CONFIG.DND5E.tools.construction = {
    ability: "str",
    id: "Compendium.outrunners-handbook.equipment.Item.ZulT9QCAfFoK7byZ"
  };    
  CONFIG.DND5E.tools.electronics = {
    ability: "dex",
    id: "Compendium.outrunners-handbook.equipment.Item.D2mYDhcUbMeOhMgt"
  };
  CONFIG.DND5E.tools.engineers = {
    ability: "dex",
    id: "Compendium.outrunners-handbook.equipment.Item.BpClMurUiQ7M3Fmk"
  };
  CONFIG.DND5E.tools.jewelry = {
    ability: "int",
    id: "Compendium.outrunners-handbook.equipment.Item.8acDC2EbbYFL5FIU"
  };
  CONFIG.DND5E.tools.mechanics = {
    ability: "str",
    id: "Compendium.outrunners-handbook.equipment.Item.WPw8Bo7lcZhaOBTg"
  };  
  CONFIG.DND5E.tools.polymer = {
    ability: "int",
    id: "Compendium.outrunners-handbook.equipment.Item.BffHOibljLAHgtwn"
  }; 
  CONFIG.DND5E.tools.surveying = {
    ability: "wis",
    id: "Compendium.outrunners-handbook.equipment.Item.gRV2xAUuxtcGrKGI"
  }; 
  CONFIG.DND5E.tools.textile = {
    ability: "dex",
    id: "Compendium.outrunners-handbook.equipment.Item.iovnHGk4zN13nL1u"
  }; 
});
  
//Add Game Sets
Hooks.once("init", () => {
  CONFIG.DND5E.tools.boardgame = {
    ability: "wis",
    id: "Compendium.outrunners-handbook.equipment.Item.EFC7Rr5VyCz2Uo4q"
  };
  CONFIG.DND5E.tools.casino = {
    ability: "wis",
    id: "Compendium.outrunners-handbook.equipment.Item.DaMHIBnfYakFjWQy"
  };
  CONFIG.DND5E.tools.ccg = {
    ability: "wis",
    id: "Compendium.outrunners-handbook.equipment.Item.v5buoWT9kzdEAOBi"
  };
  CONFIG.DND5E.tools.gameconsole = {
    ability: "int",
    id: "Compendium.outrunners-handbook.equipment.Item.TnDqyE2g0bS3v2TV"
  };
});

//Add Musician's Instruments
Hooks.once("init", () => {
	  CONFIG.DND5E.tools.brass = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.DYKGGQYeRp2olIJZ"
  };
  CONFIG.DND5E.tools.drumset = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.ootPZ3bJxeqehRn8"
  };
  CONFIG.DND5E.tools.drum = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.nwrZxE5RsDp3vXq8"
  };
  CONFIG.DND5E.tools.keyportable = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.SIzgN3qXdcgJvGmE"
  };
  CONFIG.DND5E.tools.keystanding = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.2qSFp10XYwK3cKlj"
  };
  CONFIG.DND5E.tools.microphone = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.bF3k4A41yDigkH3J"
  };
  CONFIG.DND5E.tools.bigstring = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.jxUt41g64BXYZRor"
  };
  CONFIG.DND5E.tools.midstring = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.honhmvDWgltxON5R"
  };
  CONFIG.DND5E.tools.smallstring = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.ko2SsR55zYOb5JKf"
  };
  CONFIG.DND5E.tools.woodwind = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.u6RASNmU4KJRUMBz"
  };
});

//Add Other Tools
Hooks.once("init", () => {
  CONFIG.DND5E.tools.bypass = {
    ability: "dex",
    id: "Compendium.outrunners-handbook.equipment.Item.8bRZMVzaUTPl70SN"
  };
  CONFIG.DND5E.tools.forgers = {
    ability: "dex",
    id: "Compendium.outrunners-handbook.equipment.Item.TLI5clqwtBwTfFam"
  };
  CONFIG.DND5E.tools.infiltrators = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.N3eKbUKmJbeLloeW"
  };
  CONFIG.DND5E.tools.navigation = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.uGIcXR6d9sCbOOMW"
  };
  CONFIG.DND5E.tools.pharma = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.LaAm0mlGGItHBPtw"
  };
  CONFIG.DND5E.tools.spiking = {
    ability: "int",
    id: "Compendium.outrunners-handbook.equipment.Item.h3GxZ0r8SYJ1A3tR"
  };
  CONFIG.DND5E.tools.toxin = {
    ability: "cha",
    id: "Compendium.outrunners-handbook.equipment.Item.nntPp0MUgNZxCPUF"
  };
});

//Add Vehicles
Hooks.once("init", () => {
  CONFIG.DND5E.tools.groundlight = {
    id: "Light Ground"
  };
  CONFIG.DND5E.tools.groundheavy = {
    id: "Heavy Ground"
  };
  CONFIG.DND5E.tools.mechlight = {
    id: "Light Mech"
  };
  CONFIG.DND5E.tools.mechheavy = {
    id: "Heavy Mech"
  };
  CONFIG.DND5E.tools.starfighterlight = {
    id: "Light Starfighter"
  };
  CONFIG.DND5E.tools.starfighterstandard = {
    id: "Standard Starfighter"
  };
  CONFIG.DND5E.tools.starfighterheavy = {
    id: "Heavy Starfighter"
  };
  CONFIG.DND5E.tools.transportlight = {
    id: "Light Transport"
  };
  CONFIG.DND5E.tools.transportheavy = {
    id: "Heavy Transport"
  };
  CONFIG.DND5E.tools.capital = {
    id: "Capital Ship"
  };
});
// Adds a new Weapon Properties
Hooks.once("init", () => {
  CONFIG.DND5E.itemProperties.brc = {
    label: "Braced"
  };
  CONFIG.DND5E.itemProperties.bur = {
    label: "Burst"
  };
  CONFIG.DND5E.itemProperties.cls = {
    label: "Close Quarters"
  };
  CONFIG.DND5E.itemProperties.pwr = {
    label: "Powered"
  };
  CONFIG.DND5E.itemProperties.scr = {
    label: "Scatter"
  };
  CONFIG.DND5E.itemProperties.pum = {
    label: "Pummel"
  };
  CONFIG.DND5E.validProperties.weapon.add("brc");
  CONFIG.DND5E.validProperties.weapon.add("bur");
  CONFIG.DND5E.validProperties.weapon.add("cls");
  CONFIG.DND5E.validProperties.weapon.add("pwr");
  CONFIG.DND5E.validProperties.weapon.add("scr");
  CONFIG.DND5E.validProperties.weapon.add("pum");
});
// Update Weapon Types
Hooks.once("init", () => {
  delete CONFIG.DND5E.weaponIds.battleaxe;
  delete CONFIG.DND5E.weaponIds.blowgun;
  delete CONFIG.DND5E.weaponIds.club;
  delete CONFIG.DND5E.weaponIds.dagger;
  delete CONFIG.DND5E.weaponIds.dart;
  delete CONFIG.DND5E.weaponIds.flail;
  delete CONFIG.DND5E.weaponIds.glaive;
  delete CONFIG.DND5E.weaponIds.greataxe;
  delete CONFIG.DND5E.weaponIds.greatclub;
  delete CONFIG.DND5E.weaponIds.greatsword;
  delete CONFIG.DND5E.weaponIds.halberd;
  delete CONFIG.DND5E.weaponIds.handaxe;
  delete CONFIG.DND5E.weaponIds.handcrossbow;
  delete CONFIG.DND5E.weaponIds.heavycrossbow;
  delete CONFIG.DND5E.weaponIds.javelin;
  delete CONFIG.DND5E.weaponIds.lance;
  delete CONFIG.DND5E.weaponIds.lightcrossbow;
  delete CONFIG.DND5E.weaponIds.lighthammer;
  delete CONFIG.DND5E.weaponIds.longbow;
  delete CONFIG.DND5E.weaponIds.longsword;
  delete CONFIG.DND5E.weaponIds.mace;
  delete CONFIG.DND5E.weaponIds.maul;
  delete CONFIG.DND5E.weaponIds.morningstar;
  delete CONFIG.DND5E.weaponIds.musket;
  delete CONFIG.DND5E.weaponIds.pike;
  delete CONFIG.DND5E.weaponIds.pistol;
  delete CONFIG.DND5E.weaponIds.quarterstaff;
  delete CONFIG.DND5E.weaponIds.rapier;
  delete CONFIG.DND5E.weaponIds.scimitar;
  delete CONFIG.DND5E.weaponIds.shortsword;
  delete CONFIG.DND5E.weaponIds.sickle;
  delete CONFIG.DND5E.weaponIds.spear;
  delete CONFIG.DND5E.weaponIds.shortbow;
  delete CONFIG.DND5E.weaponIds.sling;
  delete CONFIG.DND5E.weaponIds.trident;
  delete CONFIG.DND5E.weaponIds.warpick;
  delete CONFIG.DND5E.weaponIds.warhammer;
  delete CONFIG.DND5E.weaponIds.whip;
});
Hooks.once("init", () => {
  //Simple Melee
  CONFIG.DND5E.weaponIds.combatbaton="Compendium.outrunners-handbook.equipment.Item.dzOLvwaEx7SH7EvO";
  CONFIG.DND5E.weaponIds.combatknife = "Compendium.outrunners-handbook.equipment.Item.nzq0c3CafOBwGVOB";
  CONFIG.DND5E.weaponIds.combatstaff = "Compendium.outrunners-handbook.equipment.Item.27P7L5BU2FpTkhdo";
  CONFIG.DND5E.weaponIds.hatchet = "Compendium.outrunners-handbook.equipment.Item.eJJGyLNPd0XOqcLt";
  CONFIG.DND5E.weaponIds.hookblade = "Compendium.outrunners-handbook.equipment.Item.wPF2J0IN5Cp7AByw";
  CONFIG.DND5E.weaponIds.powercudgel = "Compendium.outrunners-handbook.equipment.Item.Thh8ChPJF21rpThr";
  CONFIG.DND5E.weaponIds.shockbaton = "Compendium.outrunners-handbook.equipment.Item.wC7ATN503yilhge0";
  CONFIG.DND5E.weaponIds.shockknuckles = "Compendium.outrunners-handbook.equipment.Item.8cpZa9bsqrleqoBp";
  CONFIG.DND5E.weaponIds.shocksap = "Compendium.outrunners-handbook.equipment.Item.RDcKtRk4usbjHSlT";
  CONFIG.DND5E.weaponIds.throwinghammer = "Compendium.outrunners-handbook.equipment.Item.bHdEgRtJ6Ds3lRYt";
  CONFIG.DND5E.weaponIds.throwingspear = "Compendium.outrunners-handbook.equipment.Item.SLPjCGf1WJsWtxVP";
  CONFIG.DND5E.weaponIds.vibroclaw = "Compendium.outrunners-handbook.equipment.Item.R0nR3iS8YC0kAQta";
  CONFIG.DND5E.weaponIds.vibrospear = "Compendium.outrunners-handbook.equipment.Item.IIEZFCLBTS6Bbaqr";
  //Simple Ranged
  CONFIG.DND5E.weaponIds.heavylaserpistol = "Compendium.outrunners-handbook.equipment.Item.SW6MEMkVAzkEAt3F";
  CONFIG.DND5E.weaponIds.heavypistol = "Compendium.outrunners-handbook.equipment.Item.dheNeqMW2AyRG3lT";
  CONFIG.DND5E.weaponIds.lasercarbine = "Compendium.outrunners-handbook.equipment.Item.nNj7XuH240xFpWNH";
  CONFIG.DND5E.weaponIds.lightlaserpistol = "Compendium.outrunners-handbook.equipment.Item.1LLjMMPTGwwSiuM3";
  CONFIG.DND5E.weaponIds.lightpistol = "Compendium.outrunners-handbook.equipment.Item.JYbCaxSojTfJMIVI";
  CONFIG.DND5E.weaponIds.submachinegun = "Compendium.outrunners-handbook.equipment.Item.fOpi6zxWZzMvFq5h";
  CONFIG.DND5E.weaponIds.throwingblade = "Compendium.outrunners-handbook.equipment.Item.Ozyu9PFNpkLV0LyX";
  //Martial Melee
  CONFIG.DND5E.weaponIds.breakeraxe = "Compendium.outrunners-handbook.equipment.Item.ae6hZohF8AiCXP6Y";
  CONFIG.DND5E.weaponIds.breakersword = "Compendium.outrunners-handbook.equipment.Item.6ut7GrFlhtHaND2B";
  CONFIG.DND5E.weaponIds.combataxe = "Compendium.outrunners-handbook.equipment.Item.VZtD11AHEz89ig1K";
  CONFIG.DND5E.weaponIds.combathammer = "Compendium.outrunners-handbook.equipment.Item.dBBrXHdwdIe5P2hQ";
  CONFIG.DND5E.weaponIds.combatsword = "Compendium.outrunners-handbook.equipment.Item.fznDV8h4L92UGME6";
  CONFIG.DND5E.weaponIds.concussionmaul = "Compendium.outrunners-handbook.equipment.Item.jtjpfCUTVymtOpp9";
  CONFIG.DND5E.weaponIds.duelingblade = "Compendium.outrunners-handbook.equipment.Item.GvyF2nWTFMe1ubMH";
  CONFIG.DND5E.weaponIds.filamentwhip = "Compendium.outrunners-handbook.equipment.Item.YYByUrq1yW4xQGmo";
  CONFIG.DND5E.weaponIds.magflail = "Compendium.outrunners-handbook.equipment.Item.IooKBmSsARv95oik";
  CONFIG.DND5E.weaponIds.nanoedgespear = "Compendium.outrunners-handbook.equipment.Item.NlOvvIb7DYzK3j3z";
  CONFIG.DND5E.weaponIds.poleaxe = "Compendium.outrunners-handbook.equipment.Item.L97rk3BVdnjWTL78";
  CONFIG.DND5E.weaponIds.powerfist = "Compendium.outrunners-handbook.equipment.Item.8F31obZl6ld0e4WZ";
  CONFIG.DND5E.weaponIds.powerglaive = "Compendium.outrunners-handbook.equipment.Item.TnsNB3hLWGCLGqq8";
  CONFIG.DND5E.weaponIds.quickblade = "Compendium.outrunners-handbook.equipment.Item.AYJGFt996qzUW1lR";
  CONFIG.DND5E.weaponIds.saber = "Compendium.outrunners-handbook.equipment.Item.4J3XQkJoAPlxlOLQ";
  CONFIG.DND5E.weaponIds.shocklance = "Compendium.outrunners-handbook.equipment.Item.uRgf0DP0z4PuDp30";
  CONFIG.DND5E.weaponIds.vibrospike = "Compendium.outrunners-handbook.equipment.Item.JUtQILycM0X5ARZd";
  //Martial Ranged
  CONFIG.DND5E.weaponIds.assaultrifle = "Compendium.outrunners-handbook.equipment.Item.gRjIcIeBDyAewb27";
  CONFIG.DND5E.weaponIds.breachrifle = "Compendium.outrunners-handbook.equipment.Item.mpWVD7pXXG8Bdzfz";
  CONFIG.DND5E.weaponIds.handcannon = "Compendium.outrunners-handbook.equipment.Item.YWyHEqzpR4mSXpzp";
  CONFIG.DND5E.weaponIds.heavylaserrifle = "Compendium.outrunners-handbook.equipment.Item.tTFwzxHYRS1RutiE";
  CONFIG.DND5E.weaponIds.laserrifle = "Compendium.outrunners-handbook.equipment.Item.WUP5aavorJ6CDTtT";
  CONFIG.DND5E.weaponIds.lightmachinegun = "Compendium.outrunners-handbook.equipment.Item.EUetQaxFz8xR6AQO";
  CONFIG.DND5E.weaponIds.plasmapistol = "Compendium.outrunners-handbook.equipment.Item.CYLESlcOoLoS3DHF";
  CONFIG.DND5E.weaponIds.plasmarifle = "Compendium.outrunners-handbook.equipment.Item.EfyXz4vtLs0ABY6B";
  CONFIG.DND5E.weaponIds.pulsecannon = "Compendium.outrunners-handbook.equipment.Item.qUi6EFpjLfr7jIHJ";
  CONFIG.DND5E.weaponIds.repeatinglaser = "Compendium.outrunners-handbook.equipment.Item.S0TgotgztlYW5ZCP";
  CONFIG.DND5E.weaponIds.scatterblast = "Compendium.outrunners-handbook.equipment.Item.LPhw0cZMrwBTnBlC";
  CONFIG.DND5E.weaponIds.shotgun = "Compendium.outrunners-handbook.equipment.Item.a4yzGgMAODZ0hwdZ";
  CONFIG.DND5E.weaponIds.sniperrifle = "Compendium.outrunners-handbook.equipment.Item.DOVVl0gYlVVvF60w";
});
// Update Armor Types
Hooks.once("init", () => {
  delete CONFIG.DND5E.armorIds.breastplate;
  delete CONFIG.DND5E.armorIds.chainmail;
  delete CONFIG.DND5E.armorIds.chainshirt;
  delete CONFIG.DND5E.armorIds.halfplate;
  delete CONFIG.DND5E.armorIds.hide;
  delete CONFIG.DND5E.armorIds.leather;
  delete CONFIG.DND5E.armorIds.padded;
  delete CONFIG.DND5E.armorIds.plate;
  delete CONFIG.DND5E.armorIds.ringmail;
  delete CONFIG.DND5E.armorIds.scalemail;
  delete CONFIG.DND5E.armorIds.splint;
  delete CONFIG.DND5E.armorIds.studded;
});

Hooks.once("init", () => {
  CONFIG.DND5E.armorIds.lightarmor = "Compendium.outrunners-handbook.equipment.Item.phbarmLeatherArm";
  CONFIG.DND5E.armorIds.mediumsuit = "Compendium.outrunners-handbook.equipment.Item.sxsqSfW4Gyb27Yf4";
  CONFIG.DND5E.armorIds.mediumvest = "Compendium.outrunners-handbook.equipment.Item.phbarmChainShirt";
  CONFIG.DND5E.armorIds.heavyarmor = "Compendium.outrunners-handbook.equipment.Item.phbarmPlateArmor";
});

// Update Ammunition Types
Hooks.once("init", () => {
  delete CONFIG.DND5E.ammoIds.arrow;
  delete CONFIG.DND5E.consumableTypes.ammo.subtypes.arrow;
  delete CONFIG.DND5E.ammoIds.crossbowBolt;
  delete CONFIG.DND5E.consumableTypes.ammo.subtypes.crossbowBolt;
  delete CONFIG.DND5E.ammoIds.firearmBullet;
  delete CONFIG.DND5E.consumableTypes.ammo.subtypes.firearmBullet;
  delete CONFIG.DND5E.ammoIds.slingBullet;
  delete CONFIG.DND5E.consumableTypes.ammo.subtypes.slingBullet;
  delete CONFIG.DND5E.ammoIds.energyCell;
  delete CONFIG.DND5E.consumableTypes.ammo.subtypes.energyCell;
  delete CONFIG.DND5E.ammoIds.blowgunNeedle;
  delete CONFIG.DND5E.consumableTypes.ammo.subtypes.blowgunNeedle;
});
Hooks.once("init", () => {
  CONFIG.DND5E.ammoIds.bullet = "Compendium.outrunners-handbook.equipment.Item.fEVeswGVCsxIQ0f3";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.bullet = "Bullet";
  CONFIG.DND5E.ammoIds.powerCell = "Compendium.outrunners-handbook.equipment.Item.PryIRwb68471pzJB";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.powerCell = "Power Cell";
  CONFIG.DND5E.ammoIds.shell = "Compendium.outrunners-handbook.equipment.Item.moH9vKcOcYwtsyTY";
  CONFIG.DND5E.consumableTypes.ammo.subtypes.shell = "Shell";
});
// Update Languages
Hooks.once("init", () => {
  delete CONFIG.DND5E.languages.standard.children.draconic;
  delete CONFIG.DND5E.languages.standard.children.dwarvish;
  delete CONFIG.DND5E.languages.standard.children.elvish;
  delete CONFIG.DND5E.languages.standard.children.giant;
  delete CONFIG.DND5E.languages.standard.children.gnomish;
  delete CONFIG.DND5E.languages.standard.children.goblin;
  delete CONFIG.DND5E.languages.standard.children.halfling;
  delete CONFIG.DND5E.languages.standard.children.orc;
  delete CONFIG.DND5E.languages.exotic.children.aarakocra;
  delete CONFIG.DND5E.languages.exotic.children.abyssal;
  delete CONFIG.DND5E.languages.exotic.children.cant;
  delete CONFIG.DND5E.languages.exotic.children.celestial;
  delete CONFIG.DND5E.languages.exotic.children.deep;
  delete CONFIG.DND5E.languages.exotic.children.druidic;
  delete CONFIG.DND5E.languages.exotic.children.gith;
  delete CONFIG.DND5E.languages.exotic.children.gnoll;
  delete CONFIG.DND5E.languages.exotic.children.infernal;
  delete CONFIG.DND5E.languages.exotic.children.primordial;
  delete CONFIG.DND5E.languages.exotic.children.sylvan;
  delete CONFIG.DND5E.languages.exotic.children.undercommon;
  delete CONFIG.DND5E.languages.common;
});
Hooks.once("init", () => {
  CONFIG.DND5E.languages.standard.children.astronian = "Astronian";
  CONFIG.DND5E.languages.standard.children.boru = "Boru";
  CONFIG.DND5E.languages.standard.children.chroma = "Chroma";
  CONFIG.DND5E.languages.standard.children.clysmic = "Clysmic";
  CONFIG.DND5E.languages.standard.children.dissonant = "Dissonant";
  CONFIG.DND5E.languages.standard.children.hadalic = "Hadalic";
  CONFIG.DND5E.languages.standard.children.khora = "Khora";
  CONFIG.DND5E.languages.standard.children.magmari = "Magmari";
  CONFIG.DND5E.languages.standard.children.morlith = "Morlith";
  CONFIG.DND5E.languages.standard.children.nimboo = "Nimboo";
  CONFIG.DND5E.languages.standard.children.ossik = "Ossik";
  CONFIG.DND5E.languages.standard.children.lyric = "Lyric";
  CONFIG.DND5E.languages.standard.children.phytoss = "Phytoss";
  CONFIG.DND5E.languages.standard.children.pixlish = "Pixlish";
  CONFIG.DND5E.languages.standard.children.promean = "Promean";
  CONFIG.DND5E.languages.standard.children.rosidian = "Rosidian";
  CONFIG.DND5E.languages.standard.children.ryliath = "Ryliath";
  CONFIG.DND5E.languages.standard.children.selash = "Selash";
  CONFIG.DND5E.languages.standard.children.shensi = "Shensi";
  CONFIG.DND5E.languages.standard.children.sideric = "Sideric";
  CONFIG.DND5E.languages.standard.children.signal = "SIGNAL";
  CONFIG.DND5E.languages.standard.children.slang = "Smuggler's Slang";
  CONFIG.DND5E.languages.standard.children.sleemese = "Sleemese";
  CONFIG.DND5E.languages.standard.children.typhan = "Typhan";
  CONFIG.DND5E.languages.standard.children.zoic = "Zoic";
});

//Update Currencies
Hooks.once("init", () => {
  delete CONFIG.DND5E.currencies.pp;
  delete CONFIG.DND5E.currencies.gp;
  delete CONFIG.DND5E.currencies.ep;
  delete CONFIG.DND5E.currencies.sp;
  delete CONFIG.DND5E.currencies.cp;
});
Hooks.once("init", () => {
  CONFIG.DND5E.currencies.gn = {"label": "Galactic Note", "abbreviation": "gn", "conversion": 1, "icon": "systems/dnd5e/icons/currency/platinum.webp"};
  CONFIG.DND5E.currencies.hn = {"label": "Half Note", "abbreviation": "hn", "conversion": 2, "icon": "systems/dnd5e/icons/currency/gold.webp"};
  CONFIG.DND5E.currencies.qn = {"label": "Quarter Note", "abbreviation": "qn", "conversion": 4, "icon": "systems/dnd5e/icons/currency/silver.webp"};
  CONFIG.DND5E.currencies.en = {"label": "Eighth Note", "abbreviation": "en", "conversion": 8, "icon": "systems/dnd5e/icons/currency/copper.webp"};
});

//Update Armor Classes
Hooks.once("init", () => {
  delete CONFIG.DND5E.armorClasses.unarmoredMonk;
});
Hooks.once("init", () => {
  CONFIG.DND5E.armorClasses.balancedGuard = {
            "label": "Balanced Guard",
            "formula": "10 + @abilities.dex.mod + @abilities.wis.mod"};
  CONFIG.DND5E.armorClasses.intimidatingDefense = {
            "label": "Intimidating Defense",
            "formula": "10 + @abilities.dex.mod + @abilities.cha.mod"};
});

//Update Feature Types 
Hooks.once("init", () => {
  delete CONFIG.DND5E.featureTypes.class.subtypes.channelDivinity;
  delete CONFIG.DND5E.featureTypes.class.subtypes.eldritchInvocation;
  delete CONFIG.DND5E.featureTypes.class.subtypes.ki;
});

Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.class.subtypes.cosmicConduit = "Cosmic Conduit";
  CONFIG.DND5E.featureTypes.class.subtypes.esotericSecret = "Esoteric Secret";
  CONFIG.DND5E.featureTypes.class.subtypes.focus = "Focus Ability";
  CONFIG.DND5E.featureTypes.class.subtypes.primalAspect = "Primal Aspect";
  CONFIG.DND5E.featureTypes.enchantment.subtypes.hypertechSchematic = "Hypertech Schematic"
});

//Update Habitat Types
Hooks.once("init", () => {
  CONFIG.DND5E.habitats.outerspace = {"label": "Outer Space"};
  CONFIG.DND5E.habitats.underground = {"label": "Underground"};
  CONFIG.DND5E.habitats.plains = {"label": "Plains"};
});

Hooks.once("init", () => {
  delete CONFIG.DND5E.habitats.underdark;
});

//Update Spell Progression
Hooks.once("init", () => {

  delete CONFIG.DND5E.pactCastingProgression;
  delete CONFIG.DND5E.spellcasting.pact;
});
Hooks.once("init", () => {

   
   
   CONFIG.DND5E.occultCastingProgression = [
    { 1: 1 }, // Level 1
    { 1: 2 }, // Level 2
    { 2: 2 }, // Level 3
    { 2: 2 }, // Level 4
    { 3: 2 }, // Level 5
    { 3: 2 }, // Level 6
    { 4: 3 }, // Level 7
    { 4: 3 }, // Level 8
    { 5: 3 }, // Level 9
    { 5: 3 }, // Level 10
    { 5: 3 }, // Level 11
    { 5: 3 }, // Level 12
    { 5: 4 }, // Level 13
    { 5: 4 }, // Level 14
    { 5: 4 }, // Level 15
    { 5: 4 }, // Level 16
    { 5: 4 }, // Level 17
    { 5: 4 }, // Level 18
    { 5: 5 }, // Level 19
    { 5: 5 }  // Level 20
   ];
   
   CONFIG.DND5E.spellcasting.occult = {
            "label": "Occult Magic",
            "type": "single",
            "cantrips": true,
            "prepares": true,
            "order": 10,
            "img": "icons/magic/unholy/silhouette-robe-evil-power.webp",
            "table": {
                "1": {
                    "slots": 1,
                    "level": 1
                },
                "2": {
                    "slots": 2,
                    "level": 1
                },
                "3": {
                    "slots": 2,
                    "level": 2
                },
                "5": {
                    "slots": 2,
                    "level": 3
                },
                "7": {
                    "slots": 3,
                    "level": 4
                },
                "9": {
                    "slots": 3,
                    "level": 5
                },
                "13": {
                    "slots": 4,
                    "level": 5
                },
                "19": {
                    "slots": 5,
                    "level": 5
                }
            },
            "progression": {
                "occult": {
                    "label": "Occult Magic",
                    "divisor": 1,
                    "roundUp": false
                }
            },
            "exclusive": {
                "slots": false,
                "spells": false
            }
   };
});
