import { Key } from './constants';

const zhCN: {
  [key in Key]: string;
} = {
  cicada: '知了',
  cicada_description: '一个子托管的多用户音乐服务',
  incompatible_tips: '你的浏览器无法兼容知了, 因为缺少以下功能',
  server_origin: '服务器源地址',
  wrong_server_origin: '错误的服务器源地址',
  setting: '设置',
  confirm: '确认',
  cancel: '取消',
  language: '语言',
  continue: '继续',
  email: '邮箱',
  please_enter_valid_email: '请输入合法的邮箱',
  captcha: '验证码',
  get_login_code: '获取登录验证码',
  login_code_emailed: '登录验证码已发送到邮箱',
  change_language_question: '更换语言将会重新加载应用, 是否继续?',
  relative_volume: '相对音量',
  music_play_record_short: '播放记录',
  my_music: '我的音乐',
  exploration: '发现',
  musicbill: '乐单',
  user_management: '用户管理',
  logout: '退出登录',
  logout_question: '确定退出登录吗?',
  search: '搜索',
  shared_musicbill_invitation: '共享乐单邀请',
  public_musicbill_collection: '收藏的公开乐单',
  previous_step: '上一步',
  login_code: '登录验证码',
  please_enter_login_code: '请输入登录验证码',
  welcome_back: '欢迎回来',
  create_at: '创建于',
  no_music_in_musicbill: '乐单暂无音乐',
  find_in_musicbill: '乐单内查找',
  user_created: '用户已创建',
  create_user: '创建用户',
  remark: '备注',
  create: '创建',
  please_enter_captcha: '请输入验证码',
  wrong_captcha: '错误的验证码',
  delete_user: '删除用户',
  delete_user_question: '确定删除用户吗?',
  delete_user_question_content:
    '删除用户后, 其创建的音乐/歌手将会转移到你的账号下',
  set_as_admin: '设为管理员',
  set_as_admin_question: '确定设为管理员吗?',
  set_as_admin_question_content:
    '成为管理员后账号将无法被删除, 以及拥有和你一样的权限且无法被撤销管理员身份',
  save: '保存',
  maximum_amount_of_musicbill: '乐单最大数量',
  maximum_amount_of_creating_music_per_day: '每天创建音乐最大数量',
  music_play_record_indate: '音乐播放记录保留天数',
  should_be_greater_than: '%s1 应该大于 %s2',
  should_be_greater_than_or_equal_to: '%s1 应该大于等于 %s2',
  should_be_less_than_or_equal_to: '%s1 应该小于等于 %s2',
  length_of: '%s1 长度',
  nickname: '昵称',
  join_time: '加入时间',
  zero_means_unlimited: '0 表示无限制',
  delete_music: '删除音乐',
  delete: '删除',
  music_forked_by_other_can_not_be_deleted: '被二次创作的音乐无法被删除',
  year_of_issue: '发行年份',
  edit_year_of_issue: '编辑发行年份',
  year_of_issue_limit: '发行年份应在 %s1 - %s2 之间',
  edit_avatar: '编辑头像',
  please_select_an_avatar: '请选择一个头像',
  reset_avatar: '重置头像',
  reset_avatar_question: '确定重置头像吗?',
  edit_name: '编辑名字',
  name: '名字',
  please_enter_the_name: '请输入名字',
  edit_alias: '编辑别名',
  alias: '别名',
  view_modify_record: '查看修改记录',
  no_musicbill: '暂无乐单',
  no_data: '暂无数据',
  no_suitable_music_play_record: '暂无相关的音乐播放记录',
  no_suitable_music: '暂无相关音乐',
  no_suitable_musicbill: '暂无相关乐单',
  no_shared_musicbill_invitation: '暂无共享乐单邀请',
  invitation_will_be_canceled_automatically_after_days:
    '邀请将在 %s1 天后自动取消',
  create_music: '创建音乐',
  no_music: '暂无音乐',
  no_modify_record: '暂无修改记录',
  no_public_musicbill: '暂无公开乐单',
  edit_cover: '编辑封面',
  please_select_a_cover: '请选择封面',
  reset_cover: '重置封面',
  reset_cover_question: '确定重置封面吗?',
  edit_lyric: '编辑歌词',
  lyric: '歌词',
  text_of_lrc: 'LRC 格式文本',
  modify_singer: '修改歌手',
  singer: '歌手',
  please_select_singers: '请选择歌手',
  modify_file_of_music: '修改音乐文件',
  file_of_music: '音乐文件',
  please_select_a_file: '请选择一个文件',
  one_of_formats: '以下格式的一种: %s1',
  modify_fork_from: '修改二次创作来源',
  fork_from: '二次创作来源',
  add: '添加',
  image_select_placeholder: '选择 jpeg/png 格式的图片',
  pwa_update_question: '检查到新版本, 是否马上加载?',
  music: '音乐',
  public_musicbill: '公开乐单',
  pick_from_playlist_randomly: '随机从播放列表选取',
  relocate_to_here: '重定位到此处',
  empty_playqueue: '空的播放队列',
  empty_playlist: '空的播放列表',
  next_music: '下一首',
  failed_to_play: '播放发生错误',
  auto_play_next_after_seconds: '%s1 秒后自动播放下一首',
};

export default zhCN;
