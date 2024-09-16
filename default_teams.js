import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

export const RED_TEAM_NAME = "Red";
export const BLUE_TEAM_NAME = "Black";
export const RED_TEAM_NAME = "Red";
export const BLUE_TEAM_NAME = "Black";
export const RED_TEAM_DISPLAY_NAME = "Teams/Red";
export const BLUE_TEAM_DISPLAY_NAME = "Teams/Black";
export const RED_TEAM_DISPLAY_NAME = "Teams/Red";
export const BLUE_TEAM_DISPLAY_NAME = "Teams/Black";
export const BLUE_TEAM_SPAWN_POINTS_GROUP = 1;
export const RED_TEAM_SPAWN_POINTS_GROUP = 2;
export const BLUE_TEAM_SPAWN_POINTS_GROUP = 3;
export const RED_TEAM_SPAWN_POINTS_GROUP = 4;

export function create_team_red() {
    Teams.Add(RED_TEAM_NAME, RED_TEAM_DISPLAY_NAME, new Color(1, 0, 0, 0));
    Teams.Get(RED_TEAM_NAME).Spawns.SpawnPointsGroups.Add(RED_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(RED_TEAM_NAME);

    export function create_team_black() {
    Teams.Add(BLACK_TEAM_NAME, BLACK_TEAM_DISPLAY_NAME, new Color(2, 0, 0, 0));
    Teams.Get(BLACK_TEAM_NAME).Spawns.SpawnPointsGroups.Add(BLACK_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(BLACK_TEAM_NAME);

    export function create_team_red() {
    Teams.Add(RED_TEAM_NAME, RED_TEAM_DISPLAY_NAME, new Color(1, 0, 0, 0));
    Teams.Get(RED_TEAM_NAME).Spawns.SpawnPointsGroups.Add(RED_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(RED_TEAM_NAME);

     export function create_team_black() {
    Teams.Add(BLACK_TEAM_NAME, BLACK_TEAM_DISPLAY_NAME, new Color(2, 0, 0, 0));
    Teams.Get(BLACK_TEAM_NAME).Spawns.SpawnPointsGroups.Add(BLACK_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(BLACK_TEAM_NAME);   
}

export function create_team_blue() {
    Teams.Add(BLUE_TEAM_NAME, BLUE_TEAM_DISPLAY_NAME, new Color(0, 0, 1, 0));
    Teams.Get(BLUE_TEAM_NAME).Spawns.SpawnPointsGroups.Add(BLUE_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(BLUE_TEAM_NAME);
}
